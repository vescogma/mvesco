import React, { Component } from 'react';

const Header = ({ offset }) => {
  const styles = {
    WebkitTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    MozTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    msTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    OTransform: 'translate3d(0px, ' + offset + 'px, 0px)',
    transform: 'translate3d(0px, ' + offset + 'px, 0px)',
  }
  return (
    <div className="card" style={ { ...styles } }>
      <div id="header" className="header bg-red">
        <div className="inner container bg-white">
          <div className="bold h3 black center pt4">
            Hello, my name is Miguel Vesco.
          </div>
        </div>
      </div>
      <div className="container content-wrap bg-silver">
        <div className="bg-white">
          <div className="fit shadow pb3">
            <div className="header-card col-12 sm-col-8">
              <div className="p2 image-wrap mx-auto">
                <img className="circle image-max" src="img/me.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;