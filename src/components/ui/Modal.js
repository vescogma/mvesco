import React from 'react';

const Modal = ({ children, visible, title, toggleProject }) => {
  return (
    <div
      className={ `modal ${ !!visible ? 'visible' : '' }` }
      onClick={ () => toggleProject(0) }>
      <div className="container shadow modal-wrap bg-silver">
        <div className="modal-header">
          <div className="modal-title">
            { title }
          </div>
          <div
            className="modal-close"
            onClick={ () => toggleProject(0) }>
            CLOSE
          </div>
        </div>
        <div className="modal-content bg-white">
          <div className="fit">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;