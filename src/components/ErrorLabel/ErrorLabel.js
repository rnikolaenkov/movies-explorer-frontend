import React from "react";
import './ErrorLabel.css';

function ErrorLabel(props) {
  return (
    <p className="error">{ props.message }</p>
  );
}

export default ErrorLabel;
