import { Container } from '@mui/system';
import React from 'react';
import { cleaning, delivery, deliveryParcel, landingPage, mobileLogo } from '../../assets';

import './Home.css';

const Home: React.FC = () => {
    return (
        <>
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
                <div className="container cards">
                    <div className='row'>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className='pickup'>
                                    <img src={mobileLogo} alt="" />
                                    <h5>Schedule a Pick-up</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className='deliveryparcel'>
                                    <img src={deliveryParcel} alt="" />
                                    <h5 className='ms-2'>Drop off clothes</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className='cleaning'>
                                    <img src={cleaning} alt="" />
                                    <h5>Cleaning</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card">
                                <div className='delivery'>
                                    <img src={delivery} alt="" />
                                    <h5 className='ms-1'>Delivery</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="service-steps">
                                <h2 className='text-center'>Clean Clothes Have Never Been This Easy!</h2>
                                <div className="d-flex justify-content-center">
                                    <div className='my-4 heading-underline'></div>
                                </div>
                                <h4 className='text-center mb-3'>HOW OUR SERVICES WORK</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='plan-price' style={{ background: '#464646' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="price-heading py-4">
                                <h1 className='text-center'>Our Services are worth it!</h1>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="heading-underline"></div>
                            </div>
                            <div className="price-sub-heading py-4 text-center">
                                <h4>PLAN AND PRICING</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card my-5" style={{ background: '#464646', border: '2px solid #fff', borderRadius: '13px' }}>
                                <div className="plans-card">
                                    <div className="plan-type">
                                        <h3>STANDARD</h3>
                                        <p className='pt-2'>Extra clothes cost N500 each.</p>
                                    </div>
                                    <div className="price pt-3">
                                        <h1>N 5,000<span>/week</span></h1>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="price-underline mt-3 mb-4"></div>
                                    </div>
                                    <div className="plan-points">
                                        <ul>
                                            <li>Wash and fold</li>
                                            <li>5 pieces of clothes</li>
                                            <li>Pick-up</li>
                                        </ul>
                                    </div>
                                    <div className="subscribe-btn">
                                        <button className='btn' style={{
                                            padding: '5px 70px',
                                            background: '#fff',
                                            border: '1px solid #fff',
                                            borderRadius: '3px',
                                            fontSize: '24px',
                                            color: '#35A7FF',
                                            fontWeight: '500',
                                        }}>
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card my-5" style={{ background: '#fff', border: '2px solid #fff', borderRadius: '13px' }}>
                                <div className="plans-card">
                                    <div className="plan-type-premium">
                                        <h3>STANDARD</h3>
                                        <p className='pt-2'>Extra clothes cost N500 each.</p>
                                    </div>
                                    <div className="premium-price pt-3">
                                        <h1>N 5,000<span>/week</span></h1>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="premium-price-underline mt-3 mb-4"></div>
                                    </div>
                                    <div className="premium-plan-points">
                                        <ul>
                                            <li>Wash and fold</li>
                                            <li>5 pieces of clothes</li>
                                            <li>Pick-up</li>
                                        </ul>
                                    </div>
                                    <div className="subscribe-btn">
                                        <button className='btn' style={{
                                            padding: '5px 70px',
                                            background: '#35A7FF',
                                            border: '1px solid #fff',
                                            borderRadius: '3px',
                                            fontSize: '24px',
                                            color: '#fff',
                                            fontWeight: '500',
                                        }}>
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card my-5" style={{ background: '#464646', border: '2px solid #fff', borderRadius: '13px' }}>
                                <div className="plans-card">
                                    <div className="plan-type">
                                        <h3>PRO</h3>
                                        <p className='pt-2'>Extra clothes cost N500 each.</p>
                                    </div>
                                    <div className="price pt-3">
                                        <h1>N 12,500<span>/week</span></h1>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="price-underline mt-3 mb-4"></div>
                                    </div>
                                    <div className="plan-points">
                                        <ul>
                                            <li>Dry Cleaning & Press</li>
                                            <li>8 pieces of clothes</li>
                                            <li>Pick-up & Delivery</li>
                                        </ul>
                                    </div>
                                    <div className="subscribe-btn">
                                        <button className='btn' style={{
                                            padding: '5px 70px',
                                            background: '#fff',
                                            border: '1px solid #fff',
                                            borderRadius: '3px',
                                            fontSize: '24px',
                                            color: '#35A7FF',
                                            fontWeight: '500',
                                        }}>
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
