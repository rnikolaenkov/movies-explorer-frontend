import React from "react";
import './Footer.css';

function Footer() {
 return(
   <footer className="footer">
    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className="footer__wrap">
      <ul className="footer__social-list">
        <li className="footer__social-item"><a href="https://praktikum.yandex.ru/" className="footer__social-link focus" rel="noreferrer" target="_blank">Яндекс.Практикум</a></li>
        <li className="footer__social-item"><a href="https://github.com/rnikolaenkov" className="footer__social-link focus" rel="noreferrer" target="_blank">Github</a></li>
        <li className="footer__social-item"><a href="https://www.facebook.com/rnikolaenkov" className="footer__social-link focus" rel="noreferrer" target="_blank">Facebook</a></li>
      </ul>
      <p className="footer__copy">&copy;2021</p>
    </div>
  </footer>
 );
}

export default Footer;

