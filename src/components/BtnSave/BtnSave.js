import React from "react";
import './BtnSave.css';


function BtnSave(props) {

  function addSavedList(e) {
    e.stopPropagation();
    e.preventDefault();
    props.addSavedList();
  }

  return(
    <button className="btn__save" onClick={addSavedList}>Сохранить</button>
  );
}

export default BtnSave;
