import React, { useState } from "react";
import "./menuStyle.css";

export default () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActive = () => {
    setActiveMenu(true);
  };

  const handleCloseMenu = (e) => {
    if (e.target.classList.contains("menuBg")) {
      setActiveMenu(false);
    }
  };

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

          <h1 className="current-category">Brasil</h1>
        </nav>
      </div>

      <div
        className={`menuBg ${activeMenu ? "opacity-bg" : ""}`}
        onClick={handleCloseMenu}
      >
        <nav className={`sidebar-itens ${activeMenu ? "active" : ""}`}>
          <ul>
            <li>
              <input type="text" placeholder="Buscar" />
            </li>
            <li className="separador"></li>
            <li>
              <a href="#">Brasil</a>
            </li>
            <li>
              <a href="#">Política</a>
            </li>
            <li>
              <a href="#">Saúde</a>
            </li>
            <li>
              <a href="#">Tecnologia</a>
            </li>
            <li>
              <a href="#">Esporte</a>
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
