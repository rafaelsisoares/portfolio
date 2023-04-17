import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

export default function Projects() {
  return (
    <section>
      <Header />
      <h1>Veja alguns dos meus projetos</h1>
      <hr />
      <div>
        <img src="images/trybeFCPortfolio.png" alt="trybe futebol clube" />
        <strong>Projeto Trybe Futebol Clube</strong>
        <p>
          Projeto full-stack de gerenciamento de um campeonato de futebol. O principal desafio
          foi desenvolver um back-end funcional para integrá-lo ao front-end já pronto.
        </p>
        <Link to="https://github.com/rafaelsisoares/trybe-futebol-clube">Repositório</Link>
      </div>
      <br />
      <div>
        <img src="images/trybetunes.png" alt="trybetunes" />
        <strong>Projeto TrybeTunes</strong>
        <p>
          Projeto front-end que simula uma aplicação de streaming de música, nesse projeto
          foi usada a API do iTunes
        </p>
        <Link to="https://github.com/rafaelsisoares/project-trybetunes">Repositório</Link>
        <br />
        <Link to="https://trybetunes.bohr.io/">Deploy</Link>
      </div>
      <br />
      <div>
        <img src="images/de-olho-no-tempo.png" alt="de olho no tempo" />
        <strong>Projeto De Olho No Tempo</strong>
        <p>
          Projeto front-end que exibe informações do tempo em uma cidade, nesse projeto
          foi usada a API do OpenWeatherMap.
        </p>
        <Link to="https://github.com/rafaelsisoares/de-olho-no-tempo">Repositório</Link>
        <br />
        <Link to="https://deolhonotempo.bohr.io/">Deploy</Link>
      </div>
      <br />
      <div>
        <img src="images/blogsAPI.png" alt="blogs API" />
        <strong>Blogs API</strong>
        <p>
          Projeto back-end que retorna os dados de posts de um blog armazenados no
          banco de dados MySQL.
        </p>
        <Link to="https://github.com/rafaelsisoares/blogs-api">Repositório</Link>
      </div>
    </section>
  );
}
