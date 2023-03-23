import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { facebookBtn, googleBtn } from '../../assets';
import { Signup } from './Signup';

import './Modals.css';

interface LoginProps {
    onHide: () => void;
    show: boolean;
}

export const Login: FC<LoginProps> = ({ onHide, show }) => {
    interface ModalStates {
        SignupmodalShow: boolean;
      }
      
      const [SignupmodalShow, setSignupModalShow] = useState<boolean>(false);

    return (
        <div>
            <Modal
                // size="md"
                aria-labelledby="login"
                centered
                show={show}
                onHide={onHide}
                className='login'
            >
                <Modal.Header closeButton style={{ borderBottom: 'none' }} />
                <Modal.Body className='px-4 pb-5'>
                    <h4>Welcome Back!</h4>
                    <div className='login-form'>
                        <Form>
                            <Form.Control type="email" placeholder="Email Address" className='mb-3 signup-form'/>
                            <Form.Control type="password" placeholder="Password" className='signup-form'/>

                            <div className='inline-content'>
                                <Form.Group className="my-3">
                                    <Form.Check type="checkbox" label="Remember me"
                                        style={{ fontSize: '14px', color: '#292929', fontWeight: '500', }} />
                                </Form.Group>
                                <a href="#" className='my-3 forget-pass'>Forgot password?</a>
                            </div>
                            
                            <div className='inline-content-btn'>
                                <Button
                                    variant="contained"
                                    className='login-btn'>
                                    Log in
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
                        <p>Don’t have an account? 
                            <Button 
                            onClick={() => setSignupModalShow(true) }
                            
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontWeight: '400',
                                color: '#5FA1D5',
                                letterSpacing: '0.03em',
                                textDecoration: 'underline',
                        }}> Sign up</Button></p>
                    </div>
                  <Signup show={SignupmodalShow} onHide={() => setSignupModalShow(false)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};
