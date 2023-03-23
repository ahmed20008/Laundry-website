import { Container } from '@mui/system';
import React from 'react';
import { landingPage } from '../../assets';

import './Home.css';

const Home: React.FC = () => {
    return (
        <section className='landing-page'>
            <div style={{ backgroundColor: '#DADADC' }}>
                <div className="row">
                    <div className="col-md-6 my-auto landing-text">
                        <div className='px-4 main-heading'>
                            <h1> 
                                Save Time For More Important Things
                            </h1>
                        </div>
                        <div className='bar-sm'>
                        <div className='text-bar mx-4 my-5'></div>
                        </div>
                        <div className="sub-text px-4">
                            Let us take care of your laundry
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 p-0">
                        <div>
                            <img src={landingPage} alt="Landing Page" className='img-fluid landing-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row'>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            card 1
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            card 1
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            card 1
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            card 1
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
