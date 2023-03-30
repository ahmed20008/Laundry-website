import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Role } from "./constants/roles";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Panel from "./components/Dashboard/Panel";

interface ParentProps {}

const App: React.FC<ParentProps> = () => {
  const [role, setRole] = useState<String>('admin')
  interface User {
    uid: string;
    email: string;
    role: Role;
  }
  
  const swapRoles = () => {
    setRole( role == 'admin' ? 'user' : 'admin');
  }
  
  return (
    <>
      <Router>
        <Header onButtonClick={swapRoles}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={ <Panel /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
