import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item"><a href="#" className="navtab__list-link">О проекте</a></li>
        <li className="navtab__list-item"><a href="#" className="navtab__list-link">Технологии</a></li>
        <li className="navtab__list-item"><a href="#" className="navtab__list-link">Студент</a></li>
      </ul>
    </section>
  );
}

export default NavTab;
