import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Projects.css';
import Footer from '../Components/Footer';

export default function Projects() {
  return (
    <section>
      <h1>Veja alguns dos meus projetos</h1>
      <hr />
      <div className="projects">
        <div className="project">
          <img src="images/trybeFCPortfolio.webp" alt="trybe futebol clube" />
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
          <img src="images/trybetunes.webp" alt="trybetunes" />
          <strong>Projeto TrybeTunes</strong>
          <p>
            Projeto front-end que simula uma aplicação de streaming de música, nesse projeto
            foi usada a API do iTunes
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/project-trybetunes">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
            <Link to="https://project-trybetunes-three.vercel.app/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="project">
          <img src="images/de-olho-no-tempo.webp" alt="de olho no tempo" />
          <strong>Projeto De Olho No Tempo</strong>
          <p>
            Projeto front-end que exibe informações do tempo em uma cidade, nesse projeto
            foi usada a API do OpenWeatherMap.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/de-olho-no-tempo">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
            <Link to="https://de-olho-no-tempo.vercel.app/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="project">
          <img src="images/blogsAPI.webp" alt="blogs API" />
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
          <img src="images/solar-system.webp" alt="projeto solar system" />
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
            <Link to="https://project-solar-system-sage.vercel.app/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <div className="project">
          <img src="images/mybookCapa.webp" alt="mybook" />
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
            <Link to="https://mybook-sn.vercel.app/">
              <button type="button" className="btn-deploy">Deploy</button>
            </Link>
          </div>
        </div>
        <div className="project">
          <img src="images/podcasts.webp" alt="Podcast Managment" />
          <br />
          <strong>Projeto PodcastManagment</strong>
          <p>
            API REST feita em Java usando o SpringFramework que simunla o gerenciamento de podcasts.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/podcast-managment">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
          </div>
        </div>
        <div className="project">
          <img src="images/parkingSystem.webp" alt="Parking System" />
          <br />
          <strong>Projeto ParkingSystem</strong>
          <p>
            API REST feita em Java usando o SpringFramework que simunla o back-end
            de um sistema de gerenciamento de estacionamento.
          </p>
          <div className="links">
            <Link to="https://github.com/rafaelsisoares/parkingSystem">
              <button type="button" className="btn-repo">Repositório</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
