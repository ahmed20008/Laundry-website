import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Panel from "./components/Dashboard/Panel";
import SchedulePickup from './components/SchedulePickup/SchedulePickup';

interface ParentProps {}

const App: React.FC<ParentProps> = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={ <Panel /> } />
          {/* <Route path='/Schedule-pickup' element={<SchedulePickup />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
