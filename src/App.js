import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";
import Redes from "./components/Redes/Redes";
import Mail from "./components/Mail/Mail";
import Pdf from "./components/Nav/Pdf.jsx";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Redes />
      <Mail />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/pdf" element={<Pdf />} />
      </Routes>
    </div>
  );
}

export default App;
