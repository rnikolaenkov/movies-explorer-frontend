import React from "react";
import './ErrorLabel.css';

function ErrorLabel(props) {
  let newClass = 'error';

  if (props.errShow) {
    newClass += ' error_show';
  }

  return (
    <p className={newClass}>{ props.message }</p>
  );
}

export default ErrorLabel;
