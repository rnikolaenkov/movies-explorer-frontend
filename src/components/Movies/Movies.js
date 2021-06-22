import React, {useEffect, useState} from "react";
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader";
import getMovies from "../../utils/MoviesApi";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

function Movies(props) {
  const { isLogin, showModalMenu } = props;
  const [isLoaded, setIsLodaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieList, setMovieList] = useState(localStorage.getItem('movies') || []);

  useEffect(() => {
    if (movieList.length === 0) {
      console.log('uuuu');
      const movies = [];
      getMovies().then((res) => {
        console.log(res);
        localStorage.setItem('movies', res);
        setMovieList(res);
        setIsLodaded(true);
      }).catch((err) => {
        console.log(err );
        setIsLodaded(true);
        setIsError(true);
      })
    } else {
      setIsLodaded(true);
    }
  },[])

  const showMovies = (isLoaded, isError) => {
    if (isLoaded) {
      if (isError) {
        return <ErrorMsg message="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" />;
      } else {
        return <>
          <div className="card-list">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </div>
          <button className="movie__more">Еще</button>
        </>;
      }

    } else {
      return <Preloader />;
    }
  }

  return (
    <div className="movie">
      <Header
        styles = 'header_theme_white'
        isLogin = {isLogin}
        showModalMenu = { showModalMenu }
      />
      <div className="movie__search search">
        <form className="search__form" action="#">
          <input type="text" className="search__query focus" placeholder="Фильм" name="query" />
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
        { showMovies(isLoaded, isError) }
      </div>

      <Footer />
    </div>
  );
}

export default Movies;
