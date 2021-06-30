import React, {useEffect, useState} from "react";
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader";
import getMovies from "../../utils/MoviesApi";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import {addSavedMovie, getSavedMovie, removeSavedMovie} from "../../utils/MainApi";

function Movies(props) {
  const { isLogin, showModalMenu, showModalSuccessMsg, showModalErrorMsg } = props;

  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [searchMovies, setSearchMovies] = useState(JSON.parse(localStorage.getItem('searchMovies')) || []);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [queryString, setQueryString] = useState('');
  const [showCount, setShowCount] = useState(12);
  const [nextCount, setNextCount] = useState(3);
  const [btnNextDisable, setBtnNextDisable] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
  },[]);

  useEffect(() => {
    if (movies.length === 0) {
      getMoviesFromRemote();
    } else {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    getSavedMovies();
  }, []);

  useEffect(() => {
    if (searchMovies.length === 0 && queryString.length === 0) {
      setHasError(true);
      setMsgError('Необходимо ввести запрос');
    } else {
      setHasError(false);
      setMsgError('');
    }
  },[queryString, searchMovies]);

  useEffect(() => {
    if (showCount >= searchMovies.length) {
      setBtnNextDisable(true);
    } else {
      setBtnNextDisable(false);
    }
  }, [showCount, searchMovies]);



  function changeSearch(e) {
    setQueryString(e.target.value);
  }

  function changeCheckbox(e) {
    if(e.target.checked) {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }

  function getSavedMovies() {
    const token = localStorage.getItem('jwt');
    if (token) {
      getSavedMovie(token)
        .then(data => {
          setSavedMovies(data.movieList);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch(err => {
          setHasError(true);
          setMsgError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        });
    }
  }

  function getMoviesFromRemote() {
    getMovies().then((res) => {
      localStorage.setItem('movies', JSON.stringify(res));
      setMovies(res);
      setLoaded(true);
    }).catch((err) => {
      setLoaded(true);
      setHasError(true);
      setMsgError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    });
  }

  function getSearchMovies(queryString, movies) {
    const searchMoviesArray = [];
    movies.map((movie) => {
      if (movie['nameRU'].indexOf(queryString) !== -1) {
        searchMoviesArray.push(movie);
      }
    })

    setSearchMovies(searchMoviesArray);
    localStorage.setItem('searchMovies', JSON.stringify(searchMoviesArray));
  }

  function getCount() {
    const width = window.innerWidth;
    if (width >= 1280) {
      setShowCount(12);
      setNextCount(3);
    } else if (width >= 768 && width < 1280) {
      setShowCount(8);
      setNextCount(2);
    } else {
      setShowCount(5);
      setNextCount(2);
    }
  }

  function handleResize() {
    setTimeout(() => {
      getCount();
    }, 1000);
  }

  function handleSearch(e) {
    e.preventDefault();
    getSearchMovies(queryString, movies);
    renderMovieList(searchMovies, loaded, hasError, isShortFilm);
  }

  function handleRemoveSavedList(movie) {
    const token = localStorage.getItem('jwt');
    if (token) {
      removeSavedMovie(token, movie.id)
        .then(data => {
          showModalSuccessMsg('Фильм успешно удален');
          getSavedMovies();

        })
        .catch(err => {
          showModalErrorMsg();
        })
    }
  }

  function addSavedList(movie) {

    const token = localStorage.getItem('jwt');
    if (token) {
      addSavedMovie(token, movie)
        .then(data => {
          getSavedMovies();
          showModalSuccessMsg('Фильм успешно сохранен');
        })
        .catch(err => {
          showModalErrorMsg();
        })
    }
  }

  function handleNext(e) {
    e.preventDefault();
    setShowCount(showCount + nextCount);
  }


  function renderMovieList(searchMovieList, loaded, hasError, isShortFilm) {

    if (loaded) {
      if (hasError) {
        return <ErrorMsg message={msgError}/>
      }

      let i = 1;
      return searchMovieList.map((movie) => {
        if(i <= showCount) {
          if (isShortFilm) {
            if (movie.duration <= 40) {
              i++;
              return renderCard(movie);
            }
          } else {
            i++;
            return renderCard(movie);
          }
        }
      });
    } else {
      return <Preloader />
    }
  }

  function renderCard(movie) {

    let saved = 'nosaved';
    savedMovies.forEach((sm) => {
      if (sm.movieId === movie.id) {
        saved = 'saved';
        return;
      }
    })

    return <Movie
      movie={movie}
      key={movie.id}
      showModalSuccessMsg={showModalSuccessMsg}
      showModalErrorMsg={showModalErrorMsg}
      saved={saved}
      removeSavedList={handleRemoveSavedList}
      addSavedList = {addSavedList}
    />
  }

  return (
    <div className="movie">
      <Header
        styles = 'header_theme_white'
        isLogin = {isLogin}
        showModalMenu = { showModalMenu }
      />
      <div className="movie__search search">
        <form className="search__form" action="#" >
          <input type="text" className="search__query focus" placeholder="Фильм" name="query" value={queryString} onChange={changeSearch}/>
          <button type="submit" className="search__submit focus" onClick={handleSearch}></button>
        </form>
        <div className="search__toggle-wrap">
          <div className="search__toggle">
            <input type="checkbox" className="search__short-film" id="short-film" onChange={changeCheckbox}/>
            <label htmlFor="short-film" className="search__label">Короткометражки</label>
          </div>
        </div>
      </div>

      <div className="movie__wrap">
        <div className="card-list">
          {renderMovieList(searchMovies, loaded, hasError, isShortFilm)}
        </div>
      </div>

      <button className="movie__more"  disabled={(btnNextDisable?'disabled':'')} onClick={handleNext}>Еще</button>
      <Footer />
    </div>
  )
}

export default Movies;
