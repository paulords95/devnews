import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import apiNews from '../../api/apiNews'

import TopNews from "../../components/TopNews"

import './style.css';

export default () => {

  let { type } = useParams();

  const [newsCat, setNewsCat] = useState([]);

  let typeStyle = '';
  switch (type) {
    case 'esporte':
      typeStyle = 'Esporte';
      break;
    case 'politica':
      typeStyle = 'Política';
      break;
    case 'saude':
      typeStyle = 'Saúde';
      break;
    case 'tecnologia':
      typeStyle = 'Tecnologia';
      break;
  }

  const getCategoryNews = async () => {
    const cat = await apiNews.getCategory(type);
    setNewsCat(cat.articles);
  }

  useEffect(() => {
    setNewsCat([])
    getCategoryNews();
  }, [type]);

  return (
    <div className="home-container">
      {newsCat.map((news, index) => (
        <div className="topNew-area" key={index}>
          <TopNews data={news} typeCat={typeStyle} />
        </div>
      ))}
    </div>
  )
}