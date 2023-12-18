import './Home.css'

function Home() {
    return (
      <main className="home-section">
        <section className="hero-banner">
            <h1 className="hero-title">Discover the Perfect Roofing</h1>
            <p>Learn more</p>
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
        <section className='home-about-us'>
          another content
        </section>
      </main>
    );
  }
  
  export default Home;