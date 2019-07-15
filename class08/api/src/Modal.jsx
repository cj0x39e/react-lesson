import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('modal-root');
// <modal>
//    <head>我是标题</head>
//    <button>确定</button>
// </modal>
function Modal (props) {
  return (
    ReactDOM.createPortal(
      props.children,
      modalRoot
    )
  )
}

function App () {

  const handleClick = () => {
    console.log('ok')
  }

  return (
    <div onClick={handleClick}>
      Hello world!
      <Modal>
        <button>确定</button>
      </Modal>
    </div>
  )
}

export default App;
