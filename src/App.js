import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router  basename="/roofify-react-stateless-website">
        <Header />
        <Routes>
          {/* Use this route for the root URL */}
          <Route exact path="/" element={<Home />} />

          {/* Other routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
