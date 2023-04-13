import React, { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './Modals.css';
import { Button, colors } from '@mui/material';

interface ResetPasswordProps {
    onHide: () => void;
    show: boolean;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({ onHide, show }) => {

    const handleGoBackClick = () => {
        window.history.back();
    };

    return (
        <div>
            <Modal
                aria-labelledby="reset"
                centered
                show={show}
                onHide={onHide}
                className='login'
            >
                <Modal.Header closeButton style={{ borderBottom: 'none' }} />
                <Modal.Body className='px-4 pb-5'>
                    <div className="row">
                        <div className="col-12 px-5">
                            <div className="password-reset text-center py-4">
                                <h1 style={{fontSize: '38px', fontWeight: '600', color: '#464646'}}>Congratulations!</h1>
                                <p style={{ fontSize: '16px', color: '#9F9F9F' }}>Your password has been successfully reset.</p>
                            </div>
                            <div className='pt-2 text-end'>
                                <Button
                                    variant='contained'
                                    style={{
                                        backgroundColor: '#35A7FF',
                                        border: '10px',
                                        fontWeight: '500',
                                        color: '#fff',
                                        letterSpacing: '0.03em',
                                    }}
                                    onClick={() => {handleGoBackClick();}}
                                    >
                                    Go to Dashboard
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
};
