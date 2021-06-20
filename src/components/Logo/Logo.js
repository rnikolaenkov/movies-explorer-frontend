import React from "react";
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo(props) {
  const { cssClass } = props;
  const newClass = `${cssClass} logo`;
  return (
    <img src={logo} className={ newClass } alt="Диплом"/>
  )
}

export default Logo;
