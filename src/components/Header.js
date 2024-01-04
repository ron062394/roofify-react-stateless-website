import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <header>
            <div className="header-section">
                <img className="logo" src="https://i.imgur.com/AwkQFdD.png" alt="roofing-logo" />
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li className="contact-btn"><Link to='/contact-us'>Get a Quote</Link></li>
                    </ul>
                    <span className="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
</svg>
                    </span>
                </nav>
            </div>
        </header>
    );
}

export default Header;
