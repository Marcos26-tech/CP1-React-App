import React from 'react';
import "./Imagem.css"
import logo from '../img/logo.svg';

export default () => {

  return(
    <div className="corpo">
        <div className="custom_logo">
            <img className="logo" src={logo} alt="nome do autor" />
        </div>
    </div>
  );
}