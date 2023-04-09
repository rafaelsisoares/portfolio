/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

export default function About() {
  return (
    <section>
      <Header />
      <h1>Sobre Mim</h1>
      <section className="about-me">
        <div>
          <img src="./images" alt="Foto" />
        </div>
        <article>
          <p>
            Olá, meu nome é Rafael, sou formado em tecnologia de redes de computadores.
            Minha paixão pela programação começou em um curso de desenvolvimento
            de jogos. Desde então, estudo com objetivo de atuar no mercado tech.
            Hoje estou estudando desenvolvimento WEB full-stack.
          </p>
        </article>
      </section>
      <hr />
      <section className="stacks">
        <h1>Tecnologias que mais utilizo</h1>
        <div className="icons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJsSquare />
          <FaReact />
          <FaNodeJs />
          <DiMysql />
          <DiMongodb />
        </div>
      </section>
      <hr />
      <section className="contacts">
        <h1>Meus contatos</h1>
        <Link to="https://www.linkedin.com/in/rafael-soares-dev/">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/rafaelsisoares">
          <FaGithub />
        </Link>
        <Link to="mailto:r.soares2015@outlook.com">
          <FaEnvelope />
        </Link>
      </section>
    </section>
  );
}
