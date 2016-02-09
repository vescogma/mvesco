import React, { Component } from 'react';

const Header = () => {
  return (
    <div className="card">
      <div id="header" className="header">
        <div className="header-inner">
          <div className="header-title">
            Hello, my name is Miguel Vesco.
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-wrap">
          <div className="header-card col-12 sm-col-8">
            <div className="p2 image-wrap mx-auto">
              <img className="circle image-max" src="assets/me-small.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;