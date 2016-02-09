import React, { Component } from 'react';

const Header = () => {
  return (
    <div className="card">
      <div id="header" className="header bg-red">
        <div className="inner">
          <div className="bold h3 black center pt4">
            Hello, my name is Miguel Vesco.
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="fit shadow pb3 bg-white">
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