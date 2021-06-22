import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item"><a href="#aboutProject" className="navtab__list-link focus">О проекте</a></li>
        <li className="navtab__list-item"><a href="#techs" className="navtab__list-link focus">Технологии</a></li>
        <li className="navtab__list-item"><a href="#aboutMe" className="navtab__list-link focus">Студент</a></li>
      </ul>
    </section>
  );
}

export default NavTab;
