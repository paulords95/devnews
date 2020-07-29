import React, { useState, useEffect } from "react"
import "./homeScreenStyle.css"

import apiNews from "../../api/apiNews"

import TopNews from "../../components/TopNews"

export default () => {
  const [topNews, setTopNews] = useState([])
  useEffect(() => {
    const getNewsBrazil = async () => {
      const result = await apiNews.getTopNewsBrazil()
      setTopNews(result.articles)
    }
    getNewsBrazil()
  }, [])

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
