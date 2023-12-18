import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Products/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
