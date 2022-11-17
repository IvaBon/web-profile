import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import Home from "./pages/Home";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{marginTop:'5px',padding:'5px'}}>
      <Header className='header'/>
      <BrowserRouter>
        <Routes>
          <Route className='content' path="/" element={<Home />} />
          <Route className='content' path="/portfolio" element={<Portfolio />} />
          <Route className='content' path="/contact" element={<Contact />} />
          <Route className='content' path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
