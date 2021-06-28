import React from "react";
import './BtnRemove.css';

function BtnRemove(props) {

  function removeSavedList(e) {
    e.stopPropagation();
    e.preventDefault();
    props.removeSavedList();
  }

  return (
    <button className="card__saved" onClick={removeSavedList}></button>
  );
}

export default BtnRemove;
