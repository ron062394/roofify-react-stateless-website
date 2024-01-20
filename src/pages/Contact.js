import './Contact.css'


function Contact() {
    return (
      <main className="contact-section">
        <div className='contact-section-banner'>
          <div className='contact-black-shade'>
          </div>
          <div className='get-in-touch'>
            <div>
              <h2>GET IN TOUCH WITH US</h2>
              <span>Embark on a journey of superior roofing solutions with Roofify. As a leading steel roofing manufacturer, we take pride in delivering unparalleled quality and durability. </span>
            </div>

            <div className='contact-us-cards-container'>
              <div className='contact-us-cards'>
                <img className='contact-icon' src="https://pngimg.com/d/google_maps_pin_PNG4.png" alt="" />
                <div>Visit us</div>
                <div>123 Main Street, City, State, ZIP</div>
              </div>
              <div className='contact-us-cards'>
                <img className='contact-icon' src="https://cdn-icons-png.flaticon.com/512/6730/6730822.png" alt="" />
                <div>Call us</div>
                <div> (123) 456-78900</div>
              </div>
              <div className='contact-us-cards'>
                <img className='contact-icon' src="https://i.pinimg.com/originals/b3/02/51/b302515a99b3e4a94ed563c6bbb93075.png" alt="" />
                <div>Email us</div>
                <div> Email: sales@roofingcompany.com</div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-info">
          <h2>Main Office</h2>
          <p>Main Office Address: 123 Main Street, City, State, ZIP</p>
          <p>Phone: (123) 456-78909</p>
          <p>Email: info@roofingcompany.com</p>
        </div>
        <div class="satellite-offices">

          <h2>Satellite Offices</h2>          

          <div>
            <p>Satellite Office 1 Address: 456 Satellite Ave, City, State, ZIP</p>
            <p>Email: satellite1@example.com</p>
            <p>Phone: +987654321</p>
          </div>

          <div>
            <p>Satellite Office 2 Address: 789 Rooftop Blvd, City, State, ZIP</p>
            <p>Email: satellite2@example.com</p>
            <p>Phone: +111222333</p>
          </div>

          <div>
            <p>Satellite Office 3 Address: 789 Rooftop Blvd, City, State, ZIP</p>
            <p>Email: satellite3@example.com</p>
            <p>Phone: +111222333</p>
          </div>

          <div>
            <p>Satellite Office 4 Address: 789 Rooftop Blvd, City, State, ZIP</p>
            <p>Email: satellite4@example.com</p>
            <p>Phone: +111222333</p>
          </div>



        </div>
      </main>
    );
  }
  
  export default Contact;