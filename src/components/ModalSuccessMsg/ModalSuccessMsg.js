import React from "react";
import './ModalSuccessMsg.css';
import image from "../../images/success.svg";

function ModalSuccessMsg(props) {
  let newClassContainer = 'modal-container';
  if (props.isOpenSuccess) {
    newClassContainer += ' modal-container_show';
  }

  function closeBtn() {
    props.close();
  }

  return(
    <div className={newClassContainer}>
      <div className="modal-container__window modal-container__window_success">
        <button className="modal-container__btn-close" onClick={closeBtn}></button>
        <img className="modal-container__success-img" alt="error" src={image}/>
        Вы успешно зарегистрировались
      </div>
    </div>
  )
}

export default ModalSuccessMsg;
