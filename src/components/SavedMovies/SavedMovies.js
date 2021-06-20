import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Movie from "../Movie/Movie";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  const { isLogin, showModalMenu } = props;

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
      </div>
      <Footer />
    </div>
  );
}

export default SavedMovies;
