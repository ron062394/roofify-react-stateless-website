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
                    <span className="menu-icon">click mey</span>
                </nav>
            </div>
        </header>
    );
}

export default Header;
