import React from 'react';
import Form from 'react-bootstrap/Form';
import { contactBackground, contactCall, contactLocation, contactSms } from '../../assets';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className='d-flex justify-content-center'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.940149176946!2d3.413189617044244!3d6.428076698487578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2s!4v1679691624970!5m2!1sen!2s"
              width="1200"
              height="400"
              style={{ border: '0' }}>
            </iframe>
          </div>
        </div>
      </section>
      <section className='py-5' style={{ background: '#F5F5F5' }}>
        <div className="container">
          <div className='contact-page'>
            <h4>GET IN TOUCH</h4>
            <h2 className='my-3'>We are Here for You</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-cards py-3">
                <div className="card">
                  <div className="d-flex justify-content-center pt-4">
                    <img src={contactCall} alt="" />
                  </div>
                  <h4 className='text-center'>Telephone</h4>
                  <p>+234 (567) 8901</p>
                  <p>+234 (567) 8901</p>
                  <div className="d-flex justify-content-center pt-5"><div className="contact-underline"></div></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-cards py-3">
                <div className="card">
                  <div className="d-flex justify-content-center pt-4">
                    <img src={contactSms} alt="" />
                  </div>
                  <h4 className='text-center'>Email Address</h4>
                  <p className='pb-5'>info@laundry24.com</p>
                  <div className="d-flex justify-content-center pt-5"><div className="contact-underline"></div></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-cards py-3">
                <div className="card">
                  <div className="d-flex justify-content-center pt-4">
                    <img src={contactLocation} alt="" />
                  </div>
                  <h4 className='text-center'>Office</h4>
                  <p>123 Lagos Street Victoria Island Lagos, Nigeria</p>
                  <div className="d-flex justify-content-center pt-5"><div className="contact-underline"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="services-container" style={{
              background: `url(${contactBackground})`
            }}>
              <div className="col-lg-6 col-md-8 col-sm-12">
                <div className='contact-container' style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(9, 114, 195, 0.87) 0%, rgba(0, 109, 120, 0.75941) 75.74%, rgba(0, 119, 90, 0.66) 100%)` }}>
                  <div className="container ps-5">
                    <div className="contact-form-heading">
                      <h2>Message Us</h2>
                      <p>24/7 Service</p>
                    </div>
                    <div className="contact-form pe-5 py-4">
                      <Form>
                        <Form.Group className="mb-3" >
                          <Form.Control size="lg" type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                          <Form.Control size="lg" type="tel" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                          <Form.Control size="lg" type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                          <Form.Control as="textarea" rows={4} size="lg" placeholder="Type Message..." />
                        </Form.Group>
                        <div className='d-flex justify-content-end'>
                          <button type="submit" className='mx-2 mt-2' style={{
                            padding: '8px 60px',
                            background: '#35A7FF',
                            borderRadius: '10px',
                            color: '#fff',
                            border: 'none',
                          }}>
                            Send
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
