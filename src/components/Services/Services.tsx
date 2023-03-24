import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

import './Services.css';
import { ourServices } from '../../assets';


const Services: React.FC = () => {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
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
                    <img src={ourServices} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>Tab 2 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}

export default Services;
