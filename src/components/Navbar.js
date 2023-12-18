import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="about-section">
        <span className="logo">ROOFIFY</span>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;