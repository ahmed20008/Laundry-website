import React from 'react';
import { Container } from 'react-bootstrap';
import { facebook, instagram, linkedin, logo, twitter, arrow, call, map, mail } from '../assets';

import './Footer.css';
const Footer: React.FC = () => {
    return (

        <div className='footer'>
            <Container fluid>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className='py-4 pb-0'>
                            <div className='p-3'>
                                <img src={logo} alt="Logo" />
                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    textAlign: 'justify',
                                    lineHeight: '22px',
                                    paddingTop: '1.5rem',
                                    paddingBottom: '1rem'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repudiandae dolor. Non consequuntur quaerat quae ducimus nulla fugiat quis omnis doloremque esse sit.</p>
                            </div>
                            <div className='footer-socials pb-0'>
                                <img src={twitter} alt="twitter" className='ps-3' />
                                <img src={instagram} alt="instagram" className='ps-4' />
                                <img src={linkedin} alt="linkedin" className='ps-4' />
                                <img src={facebook} alt="facebook" className='ps-4' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className='py-4 pb-0'>
                            <div className="p-3">
                                <h4 className='footer-heading'>Services</h4>
                                <div className='footer-bar mt-3 mb-4'></div>
                                <ul className='footer-services'>
                                    <li>Dry Cleaning</li>
                                    <li>Ironing Services</li>
                                    <li>Laundry</li>
                                    <li>Wash and Fold</li>
                                    <li>Doorstep Delivery</li>
                                    <li>Hand Washing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className='py-4 p-0'>
                            <div className="p-3">
                                <h4 className='footer-heading'>Office info:</h4>
                                <div className='footer-bar mt-3 mb-4'></div>
                                <div className='footer-contact'>
                                    <p className='pt-2 phone'>
                                        <img src={call} className='pe-3' /><a href="tel: +234 (567) 8901">+234 (567) 8901</a>
                                    </p>
                                    <p className='pt-4 address'>
                                        <img src={map} className='pe-3' />
                                        3401 Adeoluwa Tunde Street off Mega Filling Station Victoria Island Lagos, Nigeria
                                    </p>
                                    <p className='pt-4 mail'>
                                        <img src={mail} className='pe-3' /><a href="mailto: info@laundry24.com">info@laundry24.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className='py-4 pb-0'>
                            <div className="p-3">
                                <h4 className='footer-heading'>Open hours:</h4>
                                <div className='footer-bar mt-3 mb-4'></div>
                                <div className='footer-timing'>
                                    <p className='time'>Monday - Saturday: 8am - 7pm <br /> Sunday: CLOSED</p>
                                    <p className='pt-4'>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;