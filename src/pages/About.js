import './About.css'
import React from 'react';


const About = () => {

  return (
    <main>
      <img className='about-us-img' src="https://rooftek.co/wp-content/uploads/2017/06/banner.jpg" alt="" />
      <section className="about-section">
        <div>
          <h1>Building Strong Foundations, One Roof at a Time</h1>
        </div>
        <div className='the-journey'>
          <h2>The Roofify Journey</h2>
          <p> Roofify's story began with a passion for craftsmanship and a commitment to safeguarding homes. It all started in a small suburban town where Alex Turner, an experienced roofer with an entrepreneurial spirit, envisioned revolutionizing the roofing industry. </p>
          <h2>The Genesis</h2>
          <p>Driven by the belief that every home deserved a reliable and durable roof, Alex founded Roofify in 2005. He aimed to establish a company that not only provided exceptional roofing solutions but also prioritized customer satisfaction and quality craftsmanship.</p>
          <h2>Mission</h2>
          <p>At Roofify, our mission is to safeguard homes and families by delivering superior roofing solutions. We strive to exceed expectations by providing top-quality craftsmanship, utilizing innovative techniques, and offering personalized service to ensure durable and reliable roofs for every client. Our commitment to excellence and customer satisfaction drives us to be the trusted name in roofing, ensuring that every home we touch remains safe and secure.</p>
          <h2>Vision</h2>
          <p>Our vision at Roofify is to set the standard in the roofing industry as the epitome of reliability, innovation, and customer-centric service. We aim to revolutionize roofing practices by integrating cutting-edge technology, sustainable solutions, and expert craftsmanship. We envision a future where every homeowner has access to resilient roofs that not only protect their homes but also reflect our dedication to quality and integrity. Through our continuous commitment to excellence, we aspire to be the cornerstone of trust and reliability in the roofing landscape.</p>
        </div>
      </section>
    </main>

  );
};

export default About;
