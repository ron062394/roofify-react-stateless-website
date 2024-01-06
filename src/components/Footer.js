import './Footer.css'

function Footer() {
    return (
      <footer>
        <div  className='footer-container'>
          <img className="logo" src="https://i.imgur.com/AwkQFdD.png" alt="roofing-logo" />
          <div>
            <h4>Contact Us:</h4>
            <div>Phone: (123) 456-7890</div>
            <div>Email:</div>
            <div>info@roofingcompany.com</div>

          </div>
          <div>
            <h4>Address:</h4>
            <div>123 Main Street, City, State, Zip Code</div>
            <div>© 2023 Your Roofing Company. All Rights Reserved.</div>
          </div>
          <div>
            <h4>Follow Us:</h4>
            <div>Facebook | Twitter | LinkedIn | Instagram</div>
          </div>
        </div>
        <span className='line'></span>
        <div className='claim'>©2024 | Powered & Designed by TheVeloperRon</div>
      </footer>
    );
  }
  
  export default Footer;