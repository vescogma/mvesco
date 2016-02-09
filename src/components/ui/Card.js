import React, { Component } from 'react';

const Card = ({ children, title, colorClass }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className={ `card-title ${ colorClass }` }>{ title }</div>
        <div className="fit shadow pb3 bg-white">
          <div className="card-content col-12 sm-col-8">
            <div className="content-flex bg-darken-1">
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;