import {ToastContainer, Toast} from 'react-bootstrap';
import React, {useState} from 'react'


const ToastComponent = ({toggleShowA, showA}) => {
    
    return (
        <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>

      </div>
    )
}

export default ToastComponent
