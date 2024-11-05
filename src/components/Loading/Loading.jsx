import React from 'react';
import './loading.css'; 

const Loading = () => {
  return (
    <div className="loading">
      <div className="loader"></div>
      <div className="loading-text">Cargando, por favor espera...</div>
    </div>
  );
};

export default Loading;
