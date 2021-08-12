import React from 'react'

function Card({name,key,stars,commit,link}) {
    return (
        <div className="repos-item">
        <h3 className="repos-title">Name:{name}</h3>
        <ul className="repos-description">
          <li key={key}>Nmber of stars:{stars}</li>
          <li>Date of last commits:{commit}</li>
          <li>Link to GitHub:{link}</li>
        </ul>
      </div>
    )
}

export default Card
