import './Footer.css'

function Footer() {
    return (
      <footer>
        <div  className='footer-container'>
          <img className="logo" src="https://i.imgur.com/AwkQFdD.png" alt="roofing-logo" />
          <div>
            <div>Contact Us:</div>
            <div>Phone: (123) 456-7890</div>
            <div>Email:</div>
            <div>info@roofingcompany.com</div>

          </div>
          <div>
            <div>Address:</div>
            <div>123 Main Street, City, State, Zip Code</div>
            <div>Follow Us:</div>
            <div>Facebook | Twitter | LinkedIn | Instagram</div>
          </div>
          <div>
          </div>
        </div>
        <span className='line'></span>
        <div className='claim'>©2024 | Powered & Designed by TheVeloperRon</div>
      </footer>
    );
  }
  
  export default Footer;