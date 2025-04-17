import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/HomeCarousel.css';

export default function HomeCarousel() {
  const images = [
    'images/podcasts.png',
    'images/mybookCapa.png',
    'images/trybeFCPortfolio.png',
  ];
  return (
    <section className="box-carousel">
      <Carousel interval={3000} autoPlay infiniteLoop showThumbs={false}>
        {
                images.map((img) => (
                  <div className="carousel">
                    <h4>Estes são alguns dos meus projetos</h4>
                    <p>Você pode encontrá-los na página de Projetos</p>
                    <img alt="Imagens de projetos" src={img} />
                  </div>
                ))
            }
      </Carousel>
    </section>
  );
}
