import React from 'react';
import { ConfirmAddressImg, dashboardBackground } from '../../assets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ConfirmAddress: React.FC = () => {

    const handleGoBackClick = () => {
        window.history.back();
    };



    return (
        <>
            <section style={{
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '335px',
                    backgroundImage: `url(${dashboardBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                    zIndex: -1,
                }} />
                <div className="container" style={{
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <div className='d-flex pt-5'>
                        <button className='border-0 bg-transparent d-flex align-items-center'
                            onClick={handleGoBackClick}>
                            <KeyboardBackspaceIcon style={{ color: '#fff', fontSize: '40px' }} />
                        </button>
                        <h1 style={{
                            fontWeight: '700',
                            fontSize: '35px',
                            lineHeight: '52px',
                            color: '#FFFFFF',
                            paddingLeft: '1rem'
                        }}>
                            Confirm Address
                        </h1>
                    </div>
                </div>
            </section>
            <div className='container pb-5'>
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-12 px-1">
                        <div className='bg-white p-3'
                            style={{
                                boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.1)',
                                borderRadius: '10px',
                                height: '700px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <div>
                                <img src={ConfirmAddressImg} alt="Schedule Pickup" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="bg-white panel-shadow px-5 py-4" style={{
                            height: '700px',
                            overflowY: 'scroll',
                        }}>
                            asd
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ConfirmAddress