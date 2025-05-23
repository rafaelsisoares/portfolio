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
  FaJava,
} from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../Styles/About.css';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <section>
      <div className="about-me">
        <h1>Sobre Mim</h1>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="history"
        >
          <div className="image">
            <img src="images/me.webp" alt="Foto de Rafael" className="my-image" />
            <p className="describe">Sim, esse sou eu!</p>
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
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="history"
        >
          <article>
            <p>
              Meu primeiro contato com a programação foi em um curso técnico de desenvolvimento
              de jogos. Nesse curso aprendi o básico de HTML, CSS, C++, Java, Banco de dados
              relacional e Game Maker. O meu último projeto neste curso foi desenvolver um jogo,
              desenvolvi o Airplane vs UFO, um space shooter 2D onde o jogador controla uma nave
              e precisa destruir os inimigos (discos voadores) além de desviar dos asteróides para
              enfim derrotar a nave mãe.
              E foi nesse curso que o meu interesse pela programação começou.
            </p>
          </article>
          <div className="image">
            <img src="images/airplane-vs-ufo.webp" alt="Foto do jogo Airplane VS UFO" />
            <p className="describe">Jogo Airplane VS UFO</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="history"
        >
          <div className="image">
            <img src="images/projeto-de-redes.webp" alt="Foto do projeto de redes" />
            <p className="describe">Projeto de redes, tem até um link VPN</p>
          </div>
          <article>
            <p>
              Entrei no ensino superior, porém cursei tecnologia em redes de computadores.
              Nesta graduação, aprendi como os computadores se comunicam, os protocolos usados,
              configurar roteador e switch, fazer endereçamento IPv4 e IPv6, entre outros conteúdos.
            </p>
          </article>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="history"
        >
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
          <div className="image">
            <img src="images/trybeFCPortfolio.webp" alt="Projeto Trybe Futebol Clube" />
            <p className="describe">Um dos vários projetos desenvolvidos durante o curso da Trybe</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="history"
        >
          <div className="image">
            <img src="images/me-at-estapar.webp" alt="Foto minha no meu emprego atual" className="my-image" />
            <p className="describe">Eu trabalhando pela Estapar</p>
          </div>
          <article>
            <p>
              Em 2024 o sim veio! Minha primeira oportunidade profissional,
              embora não seja na área de tecnologia, aceitei pois vi uma
              oportunidade de aprender sobre uma outra área de atuação, estou
              atuando atualmente como Operador CGC. Nessa
              ocupação, minha função é controlar as cancelas de entrada e saída,
              cadastro e atualização da base de credenciados, consultar imagens
              de CFTV quando solicitado e outras atividades pertinentes a operação
              de um estacionamento.
            </p>
          </article>
        </motion.div>
      </div>
      <hr />
      <section className="stacks">
        <h1>Tecnologias que mais utilizo</h1>
        <div className="icons">
          <FaHtml5 className="html" />
          <FaCss3Alt className="css" />
          <FaJsSquare className="js" />
          <FaReact className="react" />
          <FaNodeJs className="node" />
          <DiMysql className="mysql" />
          <DiMongodb className="mongo" />
          <FaJava />
        </div>
      </section>
      <hr />
      <section className="contacts">
        <h1>Meus contatos</h1>
        <Link to="https://www.linkedin.com/in/rafael-soares-dev/">
          <FaLinkedin className="linkedin" />
        </Link>
        <Link to="https://github.com/rafaelsisoares">
          <FaGithub className="github" />
        </Link>
        <Link to="mailto:">
          <FaEnvelope className="email" />
        </Link>
      </section>
      <Footer />
    </section>
  );
}
