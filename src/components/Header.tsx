import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';
import { logo, SignupLogo, LoginLogo } from '../assets';
import { Login } from './Modals/Login';
import { Signup } from './Modals/Signup';
import { Link } from 'react-router-dom';
import './Header.css';


interface ModalStates {
  LoginmodalShow: boolean;
  SignupmodalShow: boolean;
}

const Header: React.FC = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [LoginmodalShow, setLoginModalShow] = useState<boolean>(false);
  const [SignupmodalShow, setSignupModalShow] = useState<boolean>(false);

  return (
    <div className={isSticky ? 'sticky-nav' : ''}>
      <div className='rectengle-2 w-full'>
        <div className='row'>
          <div className="col-md-12">
            <div className='container-fluid'>
              <div className='d-flex justify-content-end'>
                <div className="contact pe-3 my-auto">
                  <a href='#' className='text-white text-decoration-none'>
                    <p>+234 (123) 456 7890</p>
                  </a>
                </div>
                <div className="contact pe-2 my-auto">
                  <img src={LoginLogo} width="20px" />
                  <button onClick={() => setLoginModalShow(true)} className='text-white'>
                    Login
                  </button>
                </div>
                <Login show={LoginmodalShow} onHide={() => setLoginModalShow(false)} />
                <div className="contact pe-4 my-auto">
                  <img src={SignupLogo} width="20px" />
                  <button onClick={() => setSignupModalShow(true)} className='text-white'>
                    Sign up
                  </button>
                  <Signup show={SignupmodalShow} onHide={() => setSignupModalShow(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        collapseOnSelect expand="lg"
        style={{
          height: '100px',
          boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}>
        <Container fluid>
          <Link to={"/"}>
            <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: 'none' }} />
          <Navbar.Collapse id="responsive-navbar-nav" className='bg-white nav-sm rounded-bottom'>
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className='nav-pages'>Home</Nav.Link>
              <Nav.Link as={Link} to="/services" className='ps-5 nav-pages'>Services & Pricing</Nav.Link>
              <Nav.Link as={Link} to="/partners" className='ps-5 nav-pages'>Partner with us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='ps-5 nav-pages'>Contact us</Nav.Link>
            </Nav>
            <Nav>
              <div className='my-auto'>
                <Button
                  variant="contained"
                  size="medium"
                  style={{
                    background: '#35A7FF',
                    borderRadius: '10px',
                    fontSize: '16px',
                  }}
                  className="px-5 py-2 nav-btn">
                  schedule a pickup
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header