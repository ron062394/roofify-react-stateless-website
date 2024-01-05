import './Home.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Home() {
  const images = [
    'https://i.imgur.com/d4aYTXW.png',
    'https://i.imgur.com/LLkXY0A.png',
    'https://i.imgur.com/XxM9Gbk.png',
    // Add more image URLs as needed
  ];

    return (
      <main className="home-section">
        <section className="hero-banner">
            <h1 className="hero-title">Discover the Perfect Roofing</h1>
            <div className='info-cards'>
              <span>
                <h3>Openning hours:</h3>
                <p>08:00am - 5:00pm</p>
              </span>
              <span>
                <h3>Main Office:</h3>
                <p>1658, Lorem Ipsilum, 3100</p>
              </span>
              <span>
                <h3>Customer service:</h3>
                <p>roofify@webmail.com</p>  
              </span>
            </div>
            
        </section>
        <section className='home-services'>
          <div className='our-services-container'>
            <h2 className='our-services-title'>Our Roofing Solutions</h2>
          </div>
          <div className='card-services'>
            <img src="https://i.imgur.com/6GfprYv.png" alt="" className='services-icon'/>
            <h3>Professional Installations</h3>
            <p>Expert installations tailored to your needs. We use high-quality materials and ensure precision in every project to provide durable and beautiful roofs.</p>
          </div>
          <div className='card-services'>
            <img src="https://i.imgur.com/WHGsOYQ.png" alt="" className='services-icon'/>
            <h3>Swift Repairs</h3>
            <p>Expert Roofing Services Tailored to Your Needs</p>
          </div>
          <div className='card-services'>
            <img src="https://i.imgur.com/zTB5Ld9.png" alt="" className='services-icon'/>
            <h3>Roof Inspections</h3>
            <p>Comprehensive roof inspections to identify potential issues early. Our detailed assessments help maintain the integrity of your roof and prevent future problems.</p>
          </div>
        </section>

        <section className='home-carousel'>
          <Carousel>
            {images.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
        </section>
        
        <section className='project-section'>
          <h2>Our Recent Project</h2>
          <div  className='project-container'>
            <img className='project-img' src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/nLOn_99rh8piQprZEboC3bpe7yj80FRwoBLGtoxLdz6YuxKobErY3_N8xcb4khSaakjO70uCjj1T2gVxp8NvCxyC3U0u5mtskoCEjcIJE8inm_RSaRIEYwo8kDeBzuIoeTmqG9_1" alt="" />
            <img className='project-img' src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/nLOn_99rh8piQprZEboC3bpe7yj80FRwoBLGtoxLdz6YuxKobErY3_N8xcb4khSaakjO70uCjj1T2gVxp8NvCxyC3U0u5mtskoCEjcIJE8inm_RSaRIEYwo8kDeBzuIoeTmqG9_1" alt="" />
            <img className='project-img' src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/nLOn_99rh8piQprZEboC3bpe7yj80FRwoBLGtoxLdz6YuxKobErY3_N8xcb4khSaakjO70uCjj1T2gVxp8NvCxyC3U0u5mtskoCEjcIJE8inm_RSaRIEYwo8kDeBzuIoeTmqG9_1" alt="" />
          </div>
        </section>

        <section className='order-section'>
          <div  className='order-container'>
            <div className='card-services'>
              <img src="https://i.imgur.com/zTB5Ld9.png" alt="" className='services-icon'/>
              <h3>Free Consultation</h3>
              <p>Expert installations tailored to your needs. We use high-quality materials and ensure precision in every project to provide durable and beautiful roofs.</p>
            </div>
            <div className='card-services'>
              <img src="https://i.imgur.com/zTB5Ld9.png" alt="" className='services-icon'/>
              <h3>Order</h3>
              <p>Expert Roofing Services Tailored to Your Needs</p>
            </div>
            <div className='card-services'>
              <img src="https://i.imgur.com/zTB5Ld9.png" alt="" className='services-icon'/>
              <h3>Pick-up / Continue</h3>
              <p>Comprehensive roof inspections to identify potential issues early. Our detailed assessments help maintain the integrity of your roof and prevent future problems.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Home;