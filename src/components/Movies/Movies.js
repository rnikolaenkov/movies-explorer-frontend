import React, {useEffect, useState, useCallback} from "react";
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader";
import getMovies from "../../utils/MoviesApi";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

function Movies(props) {
  const { isLogin, showModalMenu } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem('movies')) || []);

  const [query, setQuery] = useState('');

  const [queryString, setQueryString] = useState('');
  const [, setCount] = useState(3);
  const [, setTotal] = useState(0);

  const [searchMovieList, setSearchMovieList] = useState([]);

  useEffect(() => {
    if (movieList.length === 0) {
      getMovies().then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setMovieList(res);
        setIsLoaded(true);
      }).catch((err) => {
        console.log(err );
        setIsLoaded(true);
        setIsError(true);
      });
    } else {
      setIsLoaded(true);
    }
    setTotal(movieList.length);
    // showMovies(movieList, isLoaded, isError);
  }, []);


  // useEffect(() => {
  //   console.log('use effect');
  //   return showMovies(movieList, isLoaded, isError);
  // //   // showMovies(movieList, isLoaded, isError);
  // },[setQuery,query]);

  const renderMovies = (movieList) => {
    // console.log('render movies', query);
    // const queryString = searchString;

    if (movieList.length !== 0) {
      return movieList.map((movie) => {

        if (movie['nameRU'].indexOf(query) !== -1) {
          
          return <Movie movie={movie} />
        }
      });
    } else {
      return <ErrorMsg message="Ничего не найдено" />
    }
  };

  const showMovies = (movieList, isLoaded, isError) => {
    console.log('123', isLoaded);
    if (isLoaded) {
      if (isError) {
        return <ErrorMsg message="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" />;
      } else {
        return <>
          <div className="card-list">
            { renderMovies(movieList) }
          </div>
          <button className="movie__more">Еще</button>
        </>;
      }
    } else {
      return <Preloader />;
    }
  }

  // const onSubmit = (e) => {
  //   console.log(searchString)
  //   e.preventDefault();
  //   // renderMovies(movieList);
  //   showMovies(isLoaded, isError);
  // };





  // const showMovies = (isLoaded, isError) => {
  //   if (isLoaded) {
  //     if (isError) {
  //       return <ErrorMsg message="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" />;
  //     } else {
  //       return <>
  //         <div className="card-list">
  //           { renderMovies(movieList) }
  //         </div>
  //         <button className="movie__more">Еще</button>
  //       </>;
  //     }
  //
  //   } else {
  //
  //   }
  // }

  const handlerSearchChange = (e) => {
    console.log(e.target.value);
    setQueryString(e.target.value);
    // showMovies(movieList, isLoaded, isError);
  }

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setQuery(queryString);
    showMovies(movieList, isLoaded, isError);
  });



  return (
    <div className="movie">
      <Header
        styles = 'header_theme_white'
        isLogin = {isLogin}
        showModalMenu = { showModalMenu }
      />
      <div className="movie__search search">
        <form className="search__form" action="#" onSubmit={onSubmit}>
          <input type="text" className="search__query focus" placeholder="Фильм" name="query" onChange={handlerSearchChange}/>
          <button type="submit" className="search__submit focus"></button>
        </form>
        <div className="search__toggle-wrap">
          <div className="search__toggle">
            <input type="checkbox" className="search__short-film" id="short-film" />
            <label htmlFor="short-film" className="search__label">Короткометражки</label>
          </div>
        </div>
      </div>

      <div className="movie__wrap">
        { showMovies(movieList, isLoaded, isError) }
      </div>

      <Footer />
    </div>
  );
}

export default Movies;
