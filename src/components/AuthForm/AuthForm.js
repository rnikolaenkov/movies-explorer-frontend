import React from "react";
import './AuthForm.css';

function AuthForm(props) {
  return(

    <div className="auth">
      { props.children }
    </div>
  );
}

export default AuthForm;
