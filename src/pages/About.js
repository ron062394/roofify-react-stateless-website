import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  const images = [
    'https://i.imgur.com/d4aYTXW.png',
    'https://i.imgur.com/LLkXY0A.png',
    'https://i.imgur.com/XxM9Gbk.png',
    // Add more image URLs as needed
  ];

  return (
    <section className="about-section">
      <h2>About Us</h2>
      <Carousel>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      <p>This is the about section</p>
    </section>
  );
};

export default About;
