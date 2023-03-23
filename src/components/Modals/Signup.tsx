import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { facebookBtn, googleBtn } from '../../assets';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

import './Modals.css';

interface SignupProps {
  onHide: () => void;
  show: boolean;
}

export const Signup: FC<SignupProps> = ({ onHide, show }) => {

  const [value, setValue] = useState<string>('');

  return (
    <div>
      <Modal
        // size="md"
        aria-labelledby="signup"
        centered
        show={show}
        onHide={onHide}
        className='signup'
      >
        <Modal.Header closeButton style={{ borderBottom: 'none' }} />
        <Modal.Body className='px-4 pb-5'>
          <h4>Create new account<span className='fullstop'>.</span></h4>
          <div className='login-form'>
            <Form>
              <div className='inline-content'>
                <Form.Control type="text" placeholder="First name" className='mb-3 w-50 signup-form' />
                <Form.Control type="text" placeholder="Last name" className='mb-3 w-50 ms-3 signup-form' />
              </div>
              <Form.Control type="email" placeholder="Email Address" className='mb-3 signup-form' />
              <PhoneInput className='mb-3 signup-form'
                international={false}
                defaultCountry="NG"
                value={value}
                onChange={setValue}
              />
              <Form.Control type="password" placeholder="Password" className='signup-form'/>
              <div className='d-flex justify-content-between'>
                <Form.Group className="my-3">
                  <Form.Check type="checkbox" label="Remember me"
                    style={{ fontSize: '14px', color: '#292929', fontWeight: '500', }} />
                </Form.Group>
                <a href="#" className='my-3 forget-pass'>Forgot password?</a>
              </div>
              <Form.Control type="text" placeholder="Referrel Code (Optional)" className='mb-3 signup-form'/>
              <div className='inline-content'>
                <Button
                  variant="contained"
                  style={{
                    background: '#35A7FF',
                    borderRadius: '10px',
                    width: '200px',
                    height: '52px',
                    fontSize: '20px',
                    color: '#fff',
                    fontWeight: '500',
                    letterSpacing: '-0.05em',
                  }}>
                  Create Account
                </Button>
                <div>
                  <Button variant="contained" className='google-btn'>
                    <img src={googleBtn} alt="" />
                  </Button>
                  <Button variant="contained" className='facebook-btn'>
                    <img src={facebookBtn} alt="" />
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <div className='pt-2'>
            <p>Already a member?
              <Button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontWeight: '400',
                  color: '#5FA1D5',
                  letterSpacing: '0.03em',
                  textDecoration: 'underline',
                }}> Log in</Button></p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};
