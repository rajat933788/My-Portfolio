import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Confirmation from './Pages/Confirmation';
import Technologies from './Pages/Technologies';
import Main from './Pages/Main';
function App() {

  return (
    <div>
      <Router>
        
          
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
            <Footer />
         
        
      </Router>
    </div>
  );
}

export default App;
