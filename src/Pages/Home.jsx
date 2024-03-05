import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/Home.css';

export default function Home() {
  return (
    <section>
      <Header />
      <h1>Rafael Soares</h1>
      <h2>Sou desenvolvedor full-stack</h2>
      <img
        className="welcome-gif"
        src="images/welcomeJS.gif"
        alt="Gif de boas-vindas em JavaScript"
      />
      <h2>Bem-vindo(a) ao meu portfólio</h2>
      <Footer />
    </section>
  );
}
