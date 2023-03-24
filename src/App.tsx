import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
