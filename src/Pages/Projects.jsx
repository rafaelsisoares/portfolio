import React from 'react';
import Header from '../Components/Header';

export default function Projects() {
  return (
    <section>
      <Header />
      <h1>Veja alguns dos meus projetos</h1>
      <hr />
      <div>
        <img src="images/trybeFCPortfolio.png" alt="trybe futebol clube" />
        <p>Projeto Trybe Futebol Clube</p>
      </div>
      <br />
      <div>
        <img src="images/trybetunes.png" alt="trybetunes" />
        <p>Projeto TrybeTunes</p>
      </div>
      <br />
      <div>
        <img src="images/de-olho-no-tempo.png" alt="de olho no tempo" />
        <p>Projeto De Olho No Tempo</p>
      </div>
    </section>
  );
}
