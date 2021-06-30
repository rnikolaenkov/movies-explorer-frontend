import React from "react";
import './BtnSaved.css';

function BtnSaved(props) {

  function removeSavedList(e) {
    e.stopPropagation();
    e.preventDefault();
    props.removeSavedList();
  }

  return (
    <button className="card__save" onClick={removeSavedList}></button>
  );
}

export default BtnSaved;
