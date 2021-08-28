import React from 'react';
import './Paragrafos.css'

const site ="https://www.cnnbrasil.com.br/saude/variante-delta-da-covid-19-entrou-no-pais-pelo-menos-27-vezes-afirma-fiocruz/"

export default () => {

  return(
    <div className="paragrafo">
        <div className="p1">
        <p>
          Por ser uma doença nova, a <a href="https://www.who.int/pt/home"target="_blank">Covid-19</a> ainda nao foi compreendida totalmente pela comunidade médica 
          global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos
          para a saúde a curto e longo prazos.
        </p>
        </div>
        <div className="p2">
        <p>
           <a href={site}target="_blank">A variante Delta da Covid-19</a>, originalmente conhecida como B.1.617.2, existe desde o final do ano passado,
          mas nos ultimos meses tornou-se rapidamente dominante em muitos países.Ainda não é claro o quanto essa 
          cepa é mais transmissível, dependendo de quem apresenta a estimativa.
        </p>
        </div>
      </div>
  );
}