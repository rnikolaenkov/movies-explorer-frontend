import React, {useEffect, useState} from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import Footer from "../Footer/Footer";
import {getSavedMovie, removeSavedMovie} from "../../utils/MainApi";

function SavedMovies(props) {
  const { isLogin, showModalMenu, showModalSuccessMsg, showModalErrorMsg } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [savedMovieList, setSavedMovieList] = useState([]);

  const [isShort, setIsShort] = useState(false);
  const [queryString, setQueryString] = useState('');
  const [showCount, setShowCount] = useState(12);
  const [nextCount, setNextCount] = useState(3);
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [btnNextDisable, setBtnNextDisable] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    getSavedMovieList();
    setIsLoaded(true);
    if (searchMovieList.length === 0) {
      setIsError(true);
      setMsgError('Необходимо задать поиск');
    }
    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
  }, [searchMovieList.length]);

  useEffect(() => {
    getSearchMovieList(queryString, isShort, savedMovieList);
  },[isShort]);

  useEffect(() => {
    if (searchMovieList.length === 0) {
      setIsError(true);
      setMsgError('Необходимо задать поиск');
    }
  }, [searchMovieList]);

  useEffect(() => {
    getSearchMovieList(queryString, isShort, savedMovieList)
    renderMovieList(searchMovieList, isLoaded, isError)
  }, [savedMovieList]);

  useEffect(() => {
    if (showCount >= searchMovieList.length) {
      setBtnNextDisable(true);
    } else {
      setBtnNextDisable(false);
    }
  }, [showCount, searchMovieList]);


  function getSavedMovieList() {
    const token = localStorage.getItem('jwt');
    if (token) {
      getSavedMovie(token)
        .then(data => {
          setSavedMovieList(data.movieList);
        })
        .catch(err => {
          setIsError(true);
          setMsgError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        });
    }

  }

  function handleSearch(e) {
    e.preventDefault();
    getSearchMovieList(queryString, isShort, savedMovieList);
  }

  function searchChange(e) {
    setQueryString(e.target.value);
  }

  function checkboxChange(e) {
    if(e.target.checked) {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }

  function handleNext(e) {
    e.preventDefault();
    setShowCount(showCount + nextCount);
  }

  function handleResize() {
    setTimeout(() => {

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
    }, 1000);

  }

  function handlerRemoveSavedList(movie) {
    const token = localStorage.getItem('jwt');
    if (token) {
      removeSavedMovie(token, movie.movieId)
        .then(data => {
          showModalSuccessMsg('Фильм успешно удален');
          let newSavedMovieList = savedMovieList.filter(item => item._id !== movie._id);
          setSavedMovieList(newSavedMovieList);
        })
        .catch(err => {
          showModalErrorMsg();
        })
    }


  }

  function getSearchMovieList(queryString, isShort, movieList) {
    let searchMovieList = [];
    if (queryString.length !== 0) {
      movieList.map((movie) => {
        if (movie['nameRU'].indexOf(queryString) !== -1) {
          if (isShort) {
            if (movie['duration'] <= 40) {
              searchMovieList.push(movie);
            }
          } else {
            searchMovieList.push(movie);
          }
        }
      });
    } else {
      searchMovieList = [];
    }

    if (searchMovieList.length === 0) {
      setIsError(true);
      setMsgError('Ничего не найдено')
    } else {
      setSearchMovieList(searchMovieList);
      setIsLoaded(true);
      setIsError(false);
    }
  }

  function renderMovieList(searchMovieList, isLoaded, isError) {
    if (isLoaded) {
      if (isError) {
        return <ErrorMsg message={msgError}/>
      }
      return renderMovieCard(searchMovieList);
    } else {
      return <Preloader />
    }
  }

  function renderMovieCard(searchMovieList) {
    let i = 1;

    return searchMovieList.map(movie => {
      if(i <= showCount) {
        i++;
        return <Movie movie={movie} key={movie._id} showModalSuccessMsg={showModalSuccessMsg} showModalErrorMsg={showModalErrorMsg} removeSavedList={handlerRemoveSavedList} saved='mylist'/>
      }
    });
  }


  return (
    <div className="movie">
      <Header
        styles = 'header_theme_white'
        isLogin = {isLogin}
        showModalMenu = { showModalMenu }
      />
      <div className="movie__search search">
        <form className="search__form" action="#" onSubmit={handleSearch}>
          <input type="text" className="search__query focus" placeholder="Фильм" name="query" value={queryString} onChange={searchChange}/>
          <button type="submit" className="search__submit focus"></button>

          <div className="search__toggle-wrap">
            <div className="search__toggle">
              <input type="checkbox" className="search__short-film" id="short-film" onChange={checkboxChange}/>
              <label htmlFor="short-film" className="search__label">Короткометражки</label>
            </div>
          </div>
        </form>
      </div>

      <div className="movie__wrap">
        <div className="card-list">
          {renderMovieList(searchMovieList, isLoaded, isError)}
        </div>
        <button className="movie__more" onClick={handleNext} disabled={(btnNextDisable?'disabled':'')}>Еще</button>
      </div>
      <Footer />
    </div>
  );
}

export default SavedMovies;
