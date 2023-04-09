import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import './Services.css';
import { ourDelivery, ourServices, servicesBackground } from '../../assets';


const Services: React.FC = () => {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <div className='service-pricing'>
      <div className="row" style={{ backgroundColor: '#F4F4F4' }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <MDBTabs fill className='mb-3'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                Service Pricing
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                Delivery
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </div>
      </div>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
          <>
            <section className='my-4'>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 my-auto">
                    <div className="services-heading">
                      <h1>Our Services</h1>
                      <p>Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum. <br /><br />
                        Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 my-auto">
                    <div className="services-img">
                      <img src={ourServices} className="img-fluid pt-sm-1" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                <div className="container-fluid">
                  <div className="col-md-12">
                    <div className="services-container" style={{
                      background: `url(${servicesBackground})`
                    }}>
                      <div className="col-md-10 offset-md-2">
                        <div className="all-services px-5 py-5" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(9, 114, 195, 0.87) 0%, rgba(0, 109, 120, 0.75941) 75.74%, rgba(0, 119, 90, 0.66) 100%)` }}>
                          <div className="col-md-12">
                            <div className="container">
                              <h2>TOPS</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>All Shirts</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Polo</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Blouse</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Sweater</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Jacket/Blazer</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Vest</p>
                                <p>N500</p>
                              </div>
                              <div className="services-underline my-4"></div>
                              <h2>BOTTOMS</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>All Shirts</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Polo</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Blouse</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Sweater</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Jacket/Blazer</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Vest</p>
                                <p>N500</p>
                              </div>
                              <div className="services-underline my-4"></div>
                              <h2>FULL BODY</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>All Shirts</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Polo</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Blouse</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Sweater</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Jacket/Blazer</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Vest</p>
                                <p>N500</p>
                              </div>
                              <div className="services-underline my-4"></div>
                              <h2>HOUSE HOLD</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>All Shirts</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Polo</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Blouse</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Sweater</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Jacket/Blazer</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Vest</p>
                                <p>N500</p>
                              </div>
                              <div className="services-underline my-4"></div>
                              <h2>OTHERS</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>All Shirts</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Polo</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Blouse</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Sweater</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Jacket/Blazer</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Vest</p>
                                <p>N500</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>
          <section className='my-4'>
            <div className="container">
              <div className="row">
                <div className="col-md-6 my-auto">
                  <div className="services-heading">
                    <h1>Delivery</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum.
                      <br /><br />
                      Lorem ipsum dolor sit amet consectetur. Lacus id arcu rhoncus convallis eu. Nunc mattis enim ipsum velit rhoncus faucibus dignissim rhoncus sapien. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 my-auto">
                  <div className="services-img">
                    <img src={ourDelivery} className="img-fluid pt-sm-1" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
              <div className="row">
                <div className="container-fluid">
                  <div className="col-md-12">
                    <div className="delivery-container" style={{
                      background: `url(${servicesBackground})`
                    }}>
                      <div className="col-md-10 offset-md-2">
                        <div className="all-services px-5 py-5" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(9, 114, 195, 0.87) 0%, rgba(0, 109, 120, 0.75941) 75.74%, rgba(0, 119, 90, 0.66) 100%)` }}>
                          <div className="col-md-12">
                            <div className="container">
                              <h2>LAGOS ISLAND</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Victoria Island</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Lekki</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Ajah</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Idumota</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Victoria Island</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Lekki</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Ajah</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Idumota</p>
                                <p>N500</p>
                              </div>
                              <div className="services-underline my-4"></div>
                              <h2>LAGOS MAINLAND</h2>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Surulere</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Ojota</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Berger</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Festac</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Ikeja</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Surulere</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Ojota</p>
                                <p>N500</p>
                              </div>
                              <div className='d-flex justify-content-between pt-1'>
                                <p>Berger</p>
                                <p>N500</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}

export default Services;
