import React from 'react'

import {
  parseISO
} from 'date-fns'
import { format } from 'date-fns-tz';

import './style.css'

export default ({ data, typeCat }) => {

  const addedDate = parseISO(data.publishedAt);

  const dateFormat = format(addedDate, 'dd/MM/yyyy HH:mm');

  return (
    <div className="tn-wrap">
      <img src={data.urlToImage} />
      <div className="type-news">
        <p>{typeCat ? typeCat : 'Brasil'}</p>
      </div>
      <div className="info-new-news">
        <a href={data.url} className="content-news">{data.title}</a>

        <div className="published-date">
          <time>
            {dateFormat}
          </time>
        </div>
      </div>
    </div>
  )
}