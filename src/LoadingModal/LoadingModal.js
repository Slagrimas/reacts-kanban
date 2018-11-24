import React from 'react';
import logo from './logo.svg';
import './LoadingModal.css';

const LoadingModal = props => {
  const { isLoading } = props;

//   const isLoading = true;

  if (isLoading) {
    return (
      <div className="modal show">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  } else {
    return null;
  }
}

export default LoadingModal;