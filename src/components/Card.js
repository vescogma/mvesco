import React, { Component } from 'react';

const Card = ({ children, title, colorClass, offset }) => {
  const styles = {
    WebkitTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    MozTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    msTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    OTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    transform: 'translate3d(0px, ' + offset + 'px, 0px)',
  }
  return (
    <div className="card" style={ { ...styles } }>
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