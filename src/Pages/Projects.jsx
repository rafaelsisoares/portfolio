import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../Styles/Projects.css';
import Footer from '../Components/Footer';

export default function Projects() {
  return (
    <section>
      <Header />
      <h1>Veja alguns dos meus projetos</h1>
      <hr />
      <div className="projects">
        <div className="project">
          <img src="images/trybeFCPortfolio.png" alt="trybe futebol clube" />
          <strong>Projeto Trybe Futebol Clube</strong>
          <p>
            Projeto full-stack de gerenciamento de um campeonato de futebol. O principal desafio
            foi desenvolver um back-end funcional para integrá-lo ao front-end já pronto.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/trybe-futebol-clube">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="project">
          <img src="images/trybetunes.png" alt="trybetunes" />
          <strong>Projeto TrybeTunes</strong>
          <p>
            Projeto front-end que simula uma aplicação de streaming de música, nesse projeto
            foi usada a API do iTunes
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/project-trybetunes">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
            <Link to="https://trybetunes.bohr.io/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="project">
          <img src="images/de-olho-no-tempo.png" alt="de olho no tempo" />
          <strong>Projeto De Olho No Tempo</strong>
          <p>
            Projeto front-end que exibe informações do tempo em uma cidade, nesse projeto
            foi usada a API do OpenWeatherMap.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/de-olho-no-tempo">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
            <Link to="https://deolhonotempo.bohr.io/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="project">
          <img src="images/blogsAPI.png" alt="blogs API" />
          <strong>Projeto Blogs API</strong>
          <p>
            Projeto back-end que retorna os dados de posts de um blog armazenados no
            banco de dados MySQL.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/blogs-api">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
          </div>
        </div>
        <div className="project">
          <img src="images/solar-system.png" alt="projeto solar system" />
          <br />
          <strong>Projeto Solar System</strong>
          <p>
            Meu primeiro projeto de React.js que lista todos os planetas do sistema solar
            e algumas missões espaciais. Além de contar com design responsívo.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/project-solar-system">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
            <Link to="https://solarsystem.bohr.io/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <div className="project">
          <img src="images/mybookCapa.png" alt="mybook" />
          <br />
          <strong>Projeto MyBook</strong>
          <p>
            Projeto pessoal feito em React que recria uma rede social
            onde é possível ver e criar postagens, curtir e comentar nas postagens existentes.
            Embora o projeto tenha apenas o front-end, há validação de usuário e senha.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/mybook">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
            <Link to="https://mybook.bohr.io/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
