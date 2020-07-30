import React, { useState, useEffect } from "react"
import "./homeScreenStyle.css"
import { useSelector } from 'react-redux'

import apiNews from "../../api/apiNews"

import TopNews from "../../components/TopNews"

export default () => {

  const searchT = useSelector(state => state.search.searchText);

  console.log(searchT);
  const [topNews, setTopNews] = useState([])
  useEffect(() => {
    const getNewsBrazil = async () => {
      const result = await apiNews.getTopNewsBrazil(searchT);
      setTopNews(result.articles);
    }
    getNewsBrazil();
  }, [searchT]);

  return (
    <div className="home-container">
      {topNews.map((news, index) => (
        <div className="topNew-area" key={index} >
          <TopNews data={news} />
        </div>
      ))}
    </div>
  )
}
