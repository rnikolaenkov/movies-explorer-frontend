import React, {useEffect, useState} from "react";
// import './ModalMsg.css';

function ModalMsg(props) {

  const [show, setShow] = useState(false);
  const [type, setType] = useState('error');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setShow(props.show);
    setType(props.type);
    setMsg(props.msg);
  }, []);

  function closeModal() {
    setShow(false);
  }

  let newClassContainer = 'modal-container';
  if (show) {
    newClassContainer += ' modal-container_show';
  }

  let newClassWindow = 'modal-container__window';
  if (type === 'error') {
    newClassWindow += ' modal-container__window_error'
  } else if(type === 'success') {
    newClassWindow += ' modal-container__window_success'
  }

  return(
    <div className={newClassContainer}>
      <div className={newClassWindow}>
        <button className="modal-container__btn-close" onClick={closeModal}></button>
        {msg}
      </div>
    </div>
  )
}

export default ModalMsg;
