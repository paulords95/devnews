import React from 'react'

import {
  parseISO
} from 'date-fns'
import { format } from 'date-fns-tz';

import './style.css'

export default ({ data }) => {

  const addedDate = parseISO(data.publishedAt);

  const dateFormat = format(addedDate, 'dd/MM/yyyy HH:mm');

  return (
    <div className="tn-wrap">
      <img src={data.urlToImage} />
      <div className="type-news">Brasil</div>
      <div className="info-new-news">
        <p className="content-news">{data.title}</p>

        <div className="published-date">
          <time>
            {dateFormat}
          </time>
        </div>
      </div>
    </div>
  )
}