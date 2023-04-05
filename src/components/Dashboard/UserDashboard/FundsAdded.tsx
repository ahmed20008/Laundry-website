import React from 'react';
import Button from '@mui/material/Button';
import { successLogo } from '../../../assets';


const ProfileUpdated: React.FC = () => {

    const handleGoBackClick = () => {
        window.history.back();
    };


    return (
        <>
            <div>
                <div className="bg-white panel-shadow px-5 py-4"
                    style={{
                        height: '700px',
                        overflowY: 'scroll',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <div className="d-flex justify-content-center">
                            <img src={successLogo} alt="" />
                        </div>
                        <div className="text-center">
                            <h1 style={{ fontSize: '38px', color: '#464646', }}>Successful!</h1>
                            <p style={{ fontSize: '20px', color: '#9F9F9F', }}>You have successfully added funds to your account.</p>
                            <Button
                                variant="contained"
                                className='py-2 mt-4'
                                style={{ backgroundColor: '#35A7FF', fontWeight: '600', borderRadius: '10px' }}
                                onClick={handleGoBackClick}
                            >
                                Go to Dashboard
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileUpdated

