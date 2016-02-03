import React, { Component } from 'react';

const Card = ({ children, title, colorClass }) => {
  return (
    <div className="card">
      <div className="container content-wrap bg-silver">
        <div className="bg-white">
          <div className={ `card-title ${ colorClass }` }>{ title }</div>
          <div className="fit shadow pb3">
            <div className="content-card col-12 sm-col-8">
              <div className="content-flex bg-darken-1">
                { children }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;