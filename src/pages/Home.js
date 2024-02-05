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
          <div className='black-shade'>
          </div>
          <h1 className="hero-title">Discover the Perfect Roofing</h1>
          <div className='info-cards'>
            <span>
              <p>Openning hours:</p>
              <p>08:00am - 5:00pm</p>
            </span>
            <span>
              <p>Main Office:</p>
              <p>1658, Lorem Ipsilum, 3100</p>
            </span>
            <span>
              <p>Customer service:</p>
              <p>roofify@webmail.com</p>  
            </span>
          </div>

        </section>


        <section className='project-section'>
          <div className='project-container'>
            <div className='project-description'>
              <span>SEE OUR LATEST PROJECTS</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus minus, sequi dolorum, dignissimos culpa asperiores incidunt provident earum, odio ratione dolor atque aliquam obcaecati ut itaque neque deleniti aliquid.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vitae illum totam laboriosam ipsa unde repudiandae impedit officiis obcaecati. Eveniet voluptates omnis adipisci maiores quibusdam nemo, odio error. Eaque at placeat adipisci esse maiores? Enim vero impedit dicta doloremque.</p>
            </div>
            <div  className='project-card-container'>
              <div className="project-card">
                <img className='project-img' src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/nLOn_99rh8piQprZEboC3bpe7yj80FRwoBLGtoxLdz6YuxKobErY3_N8xcb4khSaakjO70uCjj1T2gVxp8NvCxyC3U0u5mtskoCEjcIJE8inm_RSaRIEYwo8kDeBzuIoeTmqG9_1" alt="" />
              </div>
              
              <div className="project-card">
                  <img className='project-img' src="https://www.mydamus.com/wp-content/uploads/2023/04/File_004.jpg" alt="" />
              </div>
              
              <div className="project-card">
                <img className='project-img' src="https://readmetalroofing.com/wp-content/uploads/2023/01/Journey1.jpg" alt="" /> 
              </div>

              <div className="project-card">
                <img className='project-img' src="https://scsroofing.co.uk/wp-content/uploads/2023/10/over-roofing-to-a-factory-roof-in-Littlehampton-West-Sussex-1024x768.jpg" alt="" /> 
              </div>

              <div className="project-card">
                <img className='project-img' src="https://5.imimg.com/data5/SELLER/Default/2023/7/324588203/QP/DN/BQ/86817236/low-cost-factory-roofing-shed.jpg" alt="" /> 
              </div>

              <div className="project-card">
                <img className='project-img' src="https://images.squarespace-cdn.com/content/v1/5937137fe58c629cc59102d1/1674833787303-ZSW5UFCR6PMFDESJVQFZ/Screen%2BShot%2B2022-08-25%2Bat%2B10.30.06%2BAM.jpg?format=1500w" alt="" />
              </div>
            </div>
          </div>
        <div  className='home-experience'>
          <div>
              <span className='big-numbers'>10</span>
              <span>YEARS OF EXPERIENCE</span> 
            </div>
            <div>
              <span  className='big-numbers'>28</span>
              <span>ROOFING EXPERTS</span> 
            </div>
            <div>
              <span  className='big-numbers'>500+</span>
              <span>COMPLETED PROJECTS</span> 
            </div>
            <div>
              <span  className='big-numbers'>6</span>
              <span>SATELITE BRANCHES</span> 
            </div>

          </div>

        </section>




        <section className='home-carousel'>
          <Carousel>
            {images.map((imageUrl, index) => (
              <div key={index}>
                <img className='carousel-img' src={imageUrl} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
          <div className='carousel-description'>
            <span>Elevate Your Roofing Experience</span>
            <p>Explore our range of premium roofing materials </p>
          </div>
        </section>

        <section className='video-section'> 
          <span>Roofify Unveiled: A Pioneering Roofing Experience</span>
          <span>We have undertaken a mission to transform the conventional perception of roofing services by infusing a perfect blend of innovation and reliability into every aspect of our operations.</span>
          <div  className='video-section-container'>
            <div className='video-text-container'>
              <h2>Explore the heart of our roofing business with this exclusive sneak peek into the Roofify project!</h2>
              <p>At Roofify, we invite you on a captivating journey into the very essence of our roofing enterprise. This sneak peek offers a rare glimpse behind the scenes, allowing you to discover the intricate details that set Roofify apart in the competitive roofing industry.</p>
              <h2>Innovation Unleashed</h2>
              <h2>Reliability at the Core</h2>
            </div>
            <iframe width="800" height="450" src="https://www.youtube.com/embed/tHzn-swckGc" frameborder="0" allowfullscreen></iframe>

          </div>
        </section>

        <section className='testimonial-section'>
          <h2>Client Testimonials</h2>
        
        <div className='testimonial-container'>
          <div class="testimonial-card">
                <img src="avatar1.jpg" alt="Client Avatar" class="testimonial-avatar"/>
                <p class="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p class="testimonial-author">Dorothy Smith</p>
            </div>

            <div class="testimonial-card">
                <img src="avatar2.jpg" alt="Client Avatar" class="testimonial-avatar"/>
                <p class="testimonial-text">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <p class="testimonial-author">Claude Meek</p>
            </div>

            <div class="testimonial-card">
                <img src="avatar2.jpg" alt="Client Avatar" class="testimonial-avatar"/>
                <p class="testimonial-text">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <p class="testimonial-author">Sheldon Cooper</p>
            </div>
          
        </div>


        </section>


      </main>
    );
  }
  
  export default Home;