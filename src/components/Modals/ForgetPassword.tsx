import React, { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Signup } from './Signup';

import './Modals.css';
import { Button } from '@mui/material';
import { CheckEmail } from './CheckEmail';


interface ForgetPasswordProps {
  onHide: () => void;
  show: boolean;
}

interface ModalStates {
    SignupmodalShow: boolean;
    CheckEmailShow: boolean;
}

export const ForgetPassword: React.FC<ForgetPasswordProps> = ({ onHide, show }) => {


  const [SignupmodalShow, setSignupModalShow] = useState<boolean>(false);
  const [CheckEmailShow, setCheckEmailShow] = useState<boolean>(false);

  return (
    <div>
      <Signup show={SignupmodalShow} onHide={() => setSignupModalShow(false)} />
      <CheckEmail show={CheckEmailShow} onHide={() => setCheckEmailShow(false)} />

      <Modal
        aria-labelledby="forget"
        centered
        show={show}
        onHide={onHide}
        className='login'
      >
        <Modal.Header closeButton style={{ borderBottom: 'none' }} />
        <Modal.Body className='px-4 pb-5'>
          <div className="py-4">
            <h1 className='text-center' 
            style={{ fontSize: '38px', color: '#464646', fontWeight: '600' }}>Forgot your password?</h1>
            <p style={{ fontSize: '14px', color: '#9F9F9F', fontWeight: '500' }}>Please enter your email address. You will receive a link to create a new password via email.</p>
          </div>
          <div className="login-form py-3">
            <Form>
              <Form.Control type="email" placeholder="Email Address" className='mb-3 signup-form' />
              <div className='pt-2 text-end'>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: '#35A7FF',
                  }}
                onClick={() => {
                  setCheckEmailShow(true);
                }}
                >
                  Reset Password
                </Button>
              </div>
            </Form>
            <div className='pt-2 text-end'>
              <p>Don’t have an account?
                <Button
                  onClick={() => {
                    setSignupModalShow(true);
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontWeight: '400',
                    color: '#5FA1D5',
                    letterSpacing: '0.03em',
                    textDecoration: 'underline',
                    textTransform: 'capitalize'
                  }}> Sign up</Button></p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
