import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
