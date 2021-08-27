import React from 'react';
import './Menu.css';

export default () => {

  return(
    <div className="menu">
      <nav className="menu_bar">
        <ul>
          <li className="ponto"><a href="#">Nacional</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Internacional</a></li>
          <li><a href="#">Saúde</a></li>
          <li><a href="#">Tecnologia</a></li>
          <li><a href="#">Esporte</a></li>
          <li><a href="#">Entretenimento</a></li>
          <li><a href="#">Estilo</a></li>
          <li><a href="#">Viagem & Gastronomia</a></li>
          <li><a href="#">Newsletters</a></li>
          <li><a href="#">Podcasts</a></li>
        </ul>
      </nav>
    </div>
    
  );
}