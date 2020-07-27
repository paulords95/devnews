import React from 'react'

export default ({ data }) => {
  return (
    <div className="tn-wrap">
      <img src={data.urlToImage} style={{ height: 350 }} />
    </div>
  )
}