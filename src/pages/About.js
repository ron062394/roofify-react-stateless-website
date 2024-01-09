import './About.css'
import React from 'react';


const About = () => {

  return (
    <main>


      
      <section className='about-us banner'>
        <p className='tag-line'>Building Strong Foundations, One Roof at a Time</p>
      </section>

      
      <section className='home-services'>
          <div className='card-services our-services-container'>
            <h2 className='our-services-title'>Our Roofing Solutions</h2>
          </div>
          <div className='card-services'>
            <h3>Professional Installations</h3>
            <p>Expert installations tailored to your needs.</p>
          </div>
          <div className='card-services'>
            <h3>Swift Roofing Repairs</h3>
            <p>Expert Roofing Services Tailored to Your Needs</p>
          </div>
          <div className='card-services'>
            <h3>Roofing Inspections</h3>
            <p>Comprehensive roof inspections to identify potential issues early.</p>
          </div>
        </section>


        
      <section className="about-section">
        <img className='story-img' src="https://skylightroofing.com/wp-content/uploads/2021/07/commercial-roofing-1024x683.jpg" alt="" />
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



      <section className='job-openings-section'>
        <h1>Job Opportunities</h1>
        <h2>Current Job Openings</h2>
        <div class="job-openings-container">
          <div class="job-item">
            <h3>Roof Installer</h3>
            <p>We are seeking experienced roofers to join our team. Responsibilities include installation, repair, and maintenance of various roofing systems.</p>
            <p>Requirements:</p>
            <ul>
              <li>Previous experience in roofing</li>
              <li>Ability to work at heights</li>
              <li>Valid driver's license</li>
            </ul>
          </div>

          <div class="job-item">
            <h3>Roofing Sales Representative</h3>
            <p>We are looking for motivated sales representatives to promote and sell our roofing services.</p>
            <p>Requirements:</p>
            <ul>
              <li>Proven sales experience</li>
              <li>Excellent communication skills</li>
              <li>Knowledge of roofing materials and services</li>
            </ul>
          </div>

          <div class="job-item">
            <h3>Factory Worker (Steel Roofing)</h3>
            <p>We are hiring factory workers to create steel roofing materials.</p>
            <p>Requirements:</p>
            <ul>
              <li>Experience in metalworking or related field</li>
              <li>Ability to work in a factory setting</li>
              <li>Knowledge of steel roofing production</li>
            </ul>
          </div>

          <div class="job-item">
            <h3>Customer Sales Representative</h3>
            <p>We are looking for customer sales representatives to promote and sell our roofing services to potential customers</p>
            <p>Requirements:</p>
            <ul>
              <li>Proven sales experience</li>
              <li>Excellent communication skills</li>
              <li>Ability to build relationships with customers</li>
            </ul>
          </div>


        </div>

        <div class="how-to-apply">
          <h2>How to Apply</h2>
          <p>To apply for a job opening, email us on hrd.roofify.example.com</p>
        </div>
      </section>

      <section className="roofify-faqs">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3>What roofing services do you offer?</h3>
        <p>
          At Roofify, we provide comprehensive roofing services including repair, replacement, installation of various materials (such as asphalt shingles, metal, tile, or slate), and routine maintenance to ensure your roof's durability and longevity.
        </p>
      </div>

      <div className="faq-item">
        <h3>How do I know if my roof needs repair or replacement?</h3>
        <p>
          Signs like visible leaks, missing or damaged shingles, the age of the roof (typically over 20 years for most materials), and other indicators of structural issues or wear and tear may suggest the need for repair or replacement. We recommend scheduling an inspection for a more accurate assessment.
        </p>
      </div>

      <div className="faq-item">
        <h3>What types of roofing materials do you work with?</h3>
        <p>
          We work with various materials including asphalt shingles, metal, tile, and slate. Each material has its own set of advantages and disadvantages. For instance, asphalt shingles are cost-effective, while metal roofs offer durability. We can discuss the best option based on your preferences and budget.
        </p>
      </div>

      <div className="faq-item">
        <h3>How long does a roofing project usually take?</h3>
        <p>
          The timeline for a roofing project can vary depending on its scope and size. On average, a standard residential project might take anywhere from a few days to a couple of weeks. Factors like weather conditions and the complexity of the project can also influence the duration.
        </p>
      </div>

      <div className="faq-item">
        <h3>Do you offer warranties or guarantees on your roofing services?</h3>
        <p>
          Yes, we offer warranties on both workmanship and materials used. Our warranties are designed to ensure customer satisfaction and the quality of our services.
        </p>
      </div>

      <div className="faq-item">
        <h3>Can you help with insurance claims related to roofing repairs or replacements?</h3>
        <p>
          Absolutely! We assist in the insurance claim process for damages covered by insurance. Our team can guide you through the necessary steps to streamline the claims process.
        </p>
      </div>

      <div className="faq-item">
        <h3>What factors influence the cost of a roofing project?</h3>
        <p>
          Several factors influence the cost, including the materials chosen, roof size, complexity of the project, labor, additional features, and any necessary repairs. We can provide a detailed estimate after assessing your specific requirements.
        </p>
      </div>

      <div className="faq-item">
        <h3>How should I maintain my roof after installation or repair?</h3>
        <p>
          Regular maintenance is key to prolonging your roof's lifespan. This includes periodic inspections, keeping gutters clean, addressing any damage promptly, and following any specific care instructions we provide after the installation or repair.
        </p>
      </div>

      <div className="faq-item">
        <h3>Are your roofing contractors licensed and insured?</h3>
        <p>
          Yes, all our roofing contractors are fully licensed and insured. Rest assured, you are working with a professional and legally compliant team dedicated to delivering quality service.
        </p>
      </div>

      <div className="faq-item">
        <h3>Can I get a free estimate for my roofing project?</h3>
        <p>
          Absolutely! You can request a free estimate by contacting us via phone or filling out the inquiry form on our website. We'll assess your specific needs and provide an estimate tailored to your project.
        </p>
      </div>

    </section>


    </main>

  );
};

export default About;
