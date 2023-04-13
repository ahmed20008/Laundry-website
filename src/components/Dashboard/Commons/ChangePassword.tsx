import React, { useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { Signup } from '../../Modals/Signup';
import { ResetPassword } from '../../Modals/ResetPassword';

interface ModalStates {
    ResetPasswordShow: boolean;
    SignupmodalShow: boolean;
}

const ChangePassword: React.FC = () => {

    const [SignupmodalShow, setSignupModalShow] = useState<boolean>(false);

    const [ResetPasswordShow, setResetPasswordShow] = useState<boolean>(false);

    return (
        <>
            <Signup show={SignupmodalShow} onHide={() => setSignupModalShow(false)} />
            <section style={{ height: '700px' }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="pt-3">
                                <h1 style={{ fontSize: '38px', color: '#464646', fontWeight: '600' }}>Set new password</h1>
                                <p style={{ fontSize: '20px', color: '#9F9F9F', fontWeight: '400' }}>Your new password must be different from previously used passwords.</p>
                            </div>
                        </div>
                        <div className="col-md-6 pt-2">
                            <Form>
                                <div className='w-75 sm-w-100'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="password" size="lg" placeholder="New Password" className='border-0' style={{ backgroundColor: '#E6E6E64F' }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="password" size="lg" placeholder="Confirm Password" className='border-0' style={{ backgroundColor: '#E6E6E64F' }} />
                                    </Form.Group>
                                </div>
                                <div className='text-end w-75 pt-4 sm-w-100'>
                                    <Button variant="contained" className='py-2' style={{
                                        backgroundColor: '#35A7FF',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                    }}
                                    onClick={() => setResetPasswordShow(true)}
                                    >
                                        Reset Password
                                    </Button>
                                    <ResetPassword show={ResetPasswordShow} onHide={() => setResetPasswordShow(false)} />
                                </div>
                            </Form>
                            <div className="text-end w-75 sm-w-100">
                                <p className='pt-3'>Don’t have an account?
                                    <button
                                        className='border-0 bg-transparent'
                                        style={{ color: '#35A7FF', textDecoration: 'underline' }}
                                        onClick={() => {
                                            setSignupModalShow(true);
                                        }}
                                    >
                                        Sign up
                                    </button>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChangePassword