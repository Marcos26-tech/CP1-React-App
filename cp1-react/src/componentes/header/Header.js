import React from 'react'
import icone from '../img/autor.png';
import './Header.css';

export default () => {

  return(
    
    <div className="container">
      <div className="row">
        <main className="post_header">
          <header className="titulo">
            <h1>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimetos</h1>
            <hr/>
            <p className="post1">
              A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada 
              pela linhagem original do novo coronavírus.
            </p>
          </header>
          <section>
            <figure className="autor_image">
              <img src={icone} alt="nome do autor" />
            </figure>
            <div className="info">
              <hr/>
              <span className="post_data">24/08/2021 às 16:44 | Atualizado às 16:56</span>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
}