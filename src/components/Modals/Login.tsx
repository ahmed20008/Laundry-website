import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { facebookBtn, googleBtn } from '../../assets';
import { Signup } from './Signup';
import { ForgetPassword } from './ForgetPassword';

import './Modals.css';
import { ButtonBase } from '@mui/material';

interface LoginProps {
    onHide: () => void;
    show: boolean;
}
interface ModalStates {
    SignupmodalShow: boolean;
    ForgetPassword: boolean;
}

export const Login: React.FC<LoginProps> = ({ onHide, show }) => {

    const [SignupmodalShow, setSignupModalShow] = useState<boolean>(false);
    const [ForgetPasswordShow, setForgetPasswordShow] = useState<boolean>(false);

    return (
        <div>
            <Signup show={SignupmodalShow} onHide={() => setSignupModalShow(false)} />
            <ForgetPassword show={ForgetPasswordShow} onHide={() => setForgetPasswordShow(false)} />
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
                            <Form.Control type="email" placeholder="Email Address" className='mb-3 signup-form' />
                            <Form.Control type="password" placeholder="Password" className='signup-form' />

                            <div className='inline-content'>
                                <Form.Group className="my-3">
                                    <Form.Check type="checkbox" label="Remember me"
                                        style={{ fontSize: '14px', color: '#292929', fontWeight: '500', }} />
                                </Form.Group>
                                <ButtonBase
                                    style={{ color: '#35A7FF', textDecoration: 'underline' }}
                                    className='my-3 forget-pass border-0 bg-transparent'
                                    onClick={() => {
                                        setForgetPasswordShow(true);
                                    }}
                                >
                                    Forgot password?
                                </ButtonBase>
                            </div>

                            <div className='inline-content-btn'>
                                <Button
                                    variant="contained"
                                    className='login-btn'
                                    type='submit'>
                                    Log in
                                </Button>
                                <div className='fandg'>
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
                                }}> Sign up</Button></p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
