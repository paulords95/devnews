import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import "./menuStyle.css";

export default () => {

  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState('Brasil');
  const [onSearch, setOnSearch] = useState();

  //Abre sidebar ao clicar no botão menu
  const handleActive = () => {
    setActiveMenu(true);
  };

  //Fecha sidebar ao clicar no elemento menuBg
  const handleCloseMenu = (e) => {
    if (e.target.classList.contains("menuBg")) {
      setActiveMenu(false);
    }
  };

  // Função responsavel por mostrar a categoria da noticia no menu
  function showCategoryInMenu() {
    const categoryItem = document.querySelectorAll('.js-itens-menu li a');

    function getNameCat(event) {
      const content = event.currentTarget.innerText;
      setShowStatusMenu(content);
    }

    categoryItem.forEach((cat) => {
      cat.addEventListener('click', getNameCat);
      cat.addEventListener('click', () => {
        setActiveMenu(false);
      });
    });
  }
  showCategoryInMenu();

  //Fecha Menu ao dar scroll
  window.addEventListener('scroll', () => {
    setActiveMenu(false);
  });

  // Search
  const handleChange = (e) => {
    setOnSearch(e.target.value);
  }

  const handleReducer = (search) => {
    dispatch({
      type: 'SEARCH_NEWS',
      payload: { searchText: search }
    })
    setActiveMenu(false);
  }

  return (
    <header className="page-header">
      <div className="page-header-wrap">
        <nav className="navbar">
          <div className="navbar-button-menu" onClick={handleActive}>
            <i className="material-icons" >dehaze</i>
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
            <li className="searchInput">
              <input
                type="text"
                onChange={handleChange}
              />
              <button onClick={() => handleReducer(onSearch)}>Buscar</button>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};
