import React from 'react';

const Modal = ({ children, visible, title, toggleProject }) => {
  return (
    <div
      className={ `modal ${ !!visible ? 'visible' : '' }` }
      onClick={ () => toggleProject(0) }>
      <div
        className="modal-wrap"
        onClick={ (e) => e.stopPropagation() }>
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
        <div className="modal-content">
          <div className="fit">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;