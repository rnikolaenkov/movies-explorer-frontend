import React from "react";
import './ErrorMsg.css';

function ErrorMsg(props) {
  const { message } = props;
  return (
    <span className="error-msg">{ message }</span>
  )
}

export default ErrorMsg;
