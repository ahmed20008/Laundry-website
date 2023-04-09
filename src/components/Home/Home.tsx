import React from 'react';
import { cleaning, cleaningLogo, delivery, deliveryLogo, deliveryParcel, landingPage, mobileLogo, pickupLogo, WhyUsImg } from '../../assets';
import Form from 'react-bootstrap/Form';
import Slider from '../Home/Slider';
import Button from '@mui/material/Button';
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
            <section className='my-5'>
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
                    <div className="row">
                        <div className="col-md-4">
                            <div className="how-work my-5">
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src={pickupLogo} className="img-fluid" alt="" />
                                    </div>
                                    <h3 className='pt-3'>Pick-up/Drop off</h3>
                                    <p>All members receive bonuses and/or discounts. Sign up for more information.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="dots">.........</div> */}
                        <div className="col-md-4">
                            <div className="how-work my-5">
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src={cleaningLogo} className="img-fluid" alt="" />
                                    </div>
                                    <h3 className='pt-3'>Cleaning</h3>
                                    <p>We use premium materials, technologies and guarantee treatment with care.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-work my-5">
                                <div className="card">
                                    <div className='d-flex justify-content-center'>
                                        <img src={deliveryLogo} className="img-fluid" alt="" />
                                    </div>
                                    <h3 className='pt-3'>Delivery</h3>
                                    <p>Free delivery upon order prior request within 24 hours after cleaning.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="contained" size="medium" style={{ background: '#35A7FF', }}>
                                BOOK OUR SERVICES NOW
                            </Button>
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
                            <div className="card my-5" style={{ background: '#fff', border: '2px solid #000', borderRadius: '13px' }}>
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

            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="why-us">
                                <h2>Delivering Clean Clothes and Peace of Mind</h2>
                                <h4 className='pt-4 pb-5'>REASONS TO CHOOSE US</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="why-us-card">
                                <div className="card p-2 ">
                                    <div>
                                        <h3>Professional Care</h3>
                                        <div className="d-flex justify-content-center">
                                            <div className="why-us-underline mb-3"></div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. </p>
                                    </div>
                                    <div className='pt-5'>
                                        <h3>Excellent Results</h3>
                                        <div className="d-flex justify-content-center">
                                            <div className="why-us-underline mb-3"></div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-auto">
                            <div className="why-us-img text-center">
                                <img src={WhyUsImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="why-us-card">
                                <div className="card">
                                    <div>
                                        <h3>Fast Delivery</h3>
                                        <div className="d-flex justify-content-center">
                                            <div className="why-us-underline mb-3"></div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. </p>
                                    </div>
                                    <div className='pt-5'>
                                        <h3>Happy Customer</h3>
                                        <div className="d-flex justify-content-center">
                                            <div className="why-us-underline mb-3"></div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: '#2A87CE', height: '372px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial">
                                <h4 className='my-4'>WHAT OUR CUSTOMERS HAVE TO SAY</h4>
                                <div className="d-flex justify-content-center">
                                    <div className="why-us-underline mb-3"></div>
                                </div>
                                <div>
                                    <Slider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="partner-us">
                                <h2>Partner with us</h2>
                                <p>Sign up for our news letter and keep up to our latest deals </p>
                            </div>
                        </div>
                        <div className="col-md-6 my-auto">
                            <div className="partner-us-form">
                                <Form>
                                    <div className='d-flex d-contents-sm'>
                                        <Form.Group className="mb-3 w-75">
                                            <Form.Control type="email" placeholder="Your e-mail address" />
                                        </Form.Group>
                                        <div>
                                            <Button
                                                variant="contained"
                                                type='submit'
                                                className='mt-sm-1'
                                                style={{
                                                    background: '#35A7FF',
                                                    padding: '10px 40px',
                                                    marginLeft: '1rem',
                                                    borderRadius: '10px',
                                                }}>
                                                SUBSCRIBE
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Home;
