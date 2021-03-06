import React, { Component } from 'react';

const Card = ({ children, title, colorClass }) => {
  return (
    <div className="card" name="card">
      <div className="card-container">
        <div className={ `card-title ${ colorClass }` }>{ title }</div>
        <div className="card-wrap">
          <div className="card-content col-12 sm-col-8">
            <div className="content-flex">
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;