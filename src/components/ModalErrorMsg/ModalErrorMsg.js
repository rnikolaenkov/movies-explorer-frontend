import React from "react";
import './ModalErrorMsg.css';
import image from '../../images/error.svg';

function ModalErrorMsg(props) {

  let newClassContainer = 'modal-container';
  if (props.isOpenError) {
    newClassContainer += ' modal-container_show';
  }

  function closeBtn() {
    props.close();
  }

  return(
    <div className={newClassContainer}>
      <div className="modal-container__window modal-container__window_error">
        <button className="modal-container__btn-close" onClick={closeBtn}></button>
        <img className="modal-container__err-img" alt="error" src={image}/>
        Что-то пошло не так! Попробуйте ещё раз.
      </div>
    </div>
  )
}

export default ModalErrorMsg;
