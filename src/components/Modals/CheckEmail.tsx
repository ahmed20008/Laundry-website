import React, { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Signup } from './Signup';
// import { ForgetPassword } from './ForgetPassword';

import './Modals.css';
import { Button } from '@mui/material';

interface CheckEmailProps {
    onHide: () => void;
    show: boolean;
}
interface ModalStates {
    SignupmodalShow: boolean;
    ForgetPassword: boolean;
}

export const CheckEmail: React.FC<CheckEmailProps> = ({ onHide, show }) => {

    // const [SignupmodalShow, setSignupModalShow] = useState<boolean>(false);
    // const [ForgetPasswordShow, setForgetPasswordShow] = useState<boolean>(false);

    return (
        <div>
            {/* <Signup show={SignupmodalShow} onHide={() => setSignupModalShow(false)} />
            <ForgetPassword show={ForgetPasswordShow} onHide={() => setForgetPasswordShow(false)} /> */}

            <Modal
                aria-labelledby="login"
                centered
                show={show}
                onHide={onHide}
                className='login'
            >
                <Modal.Header closeButton style={{ borderBottom: 'none' }} />
                <Modal.Body className='px-4 pb-5'>
                    <div className="py-5">
                        <h1 className='text-center'
                            style={{ fontSize: '38px', color: '#464646', fontWeight: '600' }}>Check your email</h1>
                        <p className='text-center'
                            style={{ fontSize: '16px', color: '#9F9F9F', fontWeight: '500' }}>
                            A password reset link has been sent to test1@gmail.com
                        </p>
                    </div>
                    <div className='text-center py-3'>
                        <Button
                            variant='contained'
                            style={{
                                backgroundColor: '#35A7FF',
                                textTransform: 'capitalize'
                            }}>
                            Open Email App
                        </Button>
                    </div>
                    <div className='py-3 text-center'>
                        <p> Click
                            <span>
                                <button
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        fontWeight: '500',
                                        color: '#5FA1D5',
                                        letterSpacing: '0.03em',
                                        textDecoration: 'underline',
                                    }}>
                                    HERE
                                </button>
                            </span>
                            to resend link
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
