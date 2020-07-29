import React, { useState } from "react";
import { Link } from 'react-router-dom'

import "./menuStyle.css";

export default () => {

  const [activeMenu, setActiveMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState('Brasil');

  const handleActive = () => {
    setActiveMenu(true);
  };

  const handleCloseMenu = (e) => {
    if (e.target.classList.contains("menuBg")) {
      setActiveMenu(false);
    }
  };

  function showCategoryInMenu() {
    const categoryItem = document.querySelectorAll('.js-itens-menu li a');

    function getNameCat(event) {
      const content = event.currentTarget.innerText;
      setShowStatusMenu(content);
    }

    categoryItem.forEach((cat) => {
      cat.addEventListener('click', getNameCat);
    });
  }
  showCategoryInMenu();

  return (
    <header className="page-header">
      <div className="page-header-wrap">
        <nav className="navbar">
          <div className="navbar-button-menu" onClick={handleActive}>
            <i className="material-icons">dehaze</i>
            <p>MENU</p>
          </div>

          <div className="navbar-logo">
            <img src="/assets/teste4.svg" alt="" />
          </div>

          <h1 className="current-category">{showStatusMenu}</h1>
        </nav>
      </div>

      <div
        className={`menuBg ${activeMenu ? "opacity-bg" : ""}`}
        onClick={handleCloseMenu}
      >
        <nav className={`sidebar-itens ${activeMenu ? "active" : ""}`}>
          <ul className="js-itens-menu">
            <li>
              <input type="text" placeholder="Buscar" />
            </li>
            <li className="separador"></li>
            <li>
              <Link to="/">Brasil</Link>
            </li>
            <li>
              <Link to="/category/politica">Política</Link>
            </li>
            <li>
              <Link to="/category/saude">Saúde</Link>
            </li>
            <li>
              <Link to="/category/tecnologia">Tecnologia</Link>
            </li>
            <li>
              <Link to="/category/esporte">Esporte</Link>
            </li>
            <li className="separador"></li>
            <li>
              <a href="#">Cotação</a>
            </li>
            <li>
              <a href="#">Previsão do tempo</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
