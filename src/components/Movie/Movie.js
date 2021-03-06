import React, {useEffect, useState} from "react";
import './Movie.css';
import BtnSaved from "../BtnSaved/BtnSaved";
import BtnSave from "../BtnSave/BtnSave";
import BtnRemove from "../BtnRemove/BtnRemove";
import {apiConfig} from "../../utils/config";
import {addSavedMovie} from "../../utils/MainApi";

function Movie(props) {
  const { movie, showModalSuccessMsg, showModalErrorMsg, addSavedList, saved } = props;

  const [curSaved, setCurSaved] = useState(saved);

  function handleSavedList() {
    addSavedList(movie);
  }

  function removeSavedList() {
    props.removeSavedList(movie);
  }

  function getDuration(minutes) {
    const time = parseInt(minutes);
    const hour = Math.trunc(time / 60);
    const minute = time % 60;
    return `${hour}ч. ${minute}м.`;
  }

  function renderButtons() {
    if (saved === 'saved') {
      return <BtnSaved removeSavedList={removeSavedList}/>
    } else if (saved === 'nosaved') {
      return <BtnSave addSavedList={handleSavedList} />
    } else if (saved === 'mylist') {
      return <BtnRemove removeSavedList={removeSavedList}/>
    }
  }

  function renderImage() {
    if (saved === 'mylist') {
      return (<img className="card__img" src={`${movie.image}`} alt={movie.nameRU} />)
    } else {
      return (<img className="card__img" src={`${apiConfig.externalUrl}${movie.image.url}`} alt={movie.nameRU} />)
    }
  }

  return (
    <article className="card">
      <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
        {renderImage()}
        {renderButtons()}
      </a>

      <div className="card__info">
        <div className="card__title">{movie.nameRU}</div>
        <div className="card__duration">{getDuration(movie.duration)}</div>
      </div>
    </article>
  )
}

export default Movie;
