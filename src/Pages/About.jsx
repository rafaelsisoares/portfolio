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
            Olá, meu nome é Rafael, sou de São Paulo-SP e a minha paixão pela tecnologia
            começou quando eu ganhei meu primeiro computador. Naquela época, eu não tinha
            acesso a Internet, então eu costumava usá-lo como entretenimento, mas sempre tive
            curiosidade de saber mais sobre o computador, então começei a fazer pequenos cursos
            relacionados a informática.
          </p>
        </article>
        <div>
          <img src="./images" alt="Foto" />
        </div>
        <article>
          <p>
            Meu primeiro contato com a programação foi em um curso técnico de desenvolvimento
            de jogos. Nesse curso aprendi o básico de HTML, CSS, C++, Java, Banco de dados
            relacional e Game Maker. O meu último projeto neste curso foi desenvolver um jogo,
            desenvolvi o Airplane vs UFO, um space shooter 2D onde o jogador controla uma nave
            e precisa destruir os inimigos (discos voadores) além de desviar dos asteróides para
            enfim derrotar a nave mãe.
            E foi nesse curso que o meu interesse pela programação floriu.
          </p>
        </article>
        <div>
          <img src="./images" alt="Foto" />
        </div>
        <article>
          <p>
            Entrei no ensino superior, porém cursei tecnologia em redes de computadores.
            Nesta graduação, aprendi como os computadores se comunicam, os protocolos usados,
            configurar roteador e switch, fazer endereçamento IPv4 e IPv6, entre outros conteúdos.
          </p>
        </article>
        <div>
          <img src="./images" alt="Foto" />
        </div>
        <article>
          <p>
            Em 2022, enquanto trabalhava com meu pai na lanchonete dele, conheci a Trybe
            e decidi dar uma chance ao curso já que eu não estava satisfeito com o que eu
            fazia naquela época. Durante o curso, aprendi muito sobre desenvolvimento WEB,
            me aprofundei em JavaScript, desenvolvimento front-end com React.js, desenvolvimento
            back-end com Node.js, TypeScript, além de desenvolver dezenas de projetos tanto
            individuais como em grupo.
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
