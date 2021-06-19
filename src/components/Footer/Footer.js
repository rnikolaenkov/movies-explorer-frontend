import React from "react";
import './Footer.css';

function Footer() {
 return(
   <footer className="footer">
    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className="footer__wrap">
      <ul className="footer__social-list">
        <li className="footer__social-item"><a href="#" className="footer__social-link">Яндекс.Практикум</a></li>
        <li className="footer__social-item"><a href="#" className="footer__social-link">Github</a></li>
        <li className="footer__social-item"><a href="#" className="footer__social-link">Facebook</a></li>
      </ul>
      <p className="footer__copy">&copy;2021</p>
    </div>
  </footer>
 );
}

export default Footer;

