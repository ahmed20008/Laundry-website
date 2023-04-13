import React, { useState } from 'react'
import { dashboardBackground, reviewOrderImg } from '../../assets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button } from '@mui/material';
import OrderPlaced from './OrderPlaced';

const OrderSummary: React.FC = () => {


  const handleGoBackClick = () => {
    window.location.reload();
  };

  const [submitOrderClicked, setSubmitOrderClicked] = useState(false);

  const handleSubmitOrder = () => {
    setSubmitOrderClicked(true);
  };


  return (
    <>
      {submitOrderClicked ? (
        <OrderPlaced />
      ) : (
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
                  Schedule Pickup
                </h1>
              </div>
            </div>
          </section >
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
                    <img src={reviewOrderImg} alt="Review Order" />
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                  height: '700px',
                  overflowY: 'scroll',
                }}>
                  <div className="order-summary-heading pb-4">
                    <h2>Order Summary</h2>
                    <p>Review and confirm your order.</p>
                  </div>
                  <div className='order-details'>
                    <div>
                      <p>Pick up Date: <span>Feb 14, 2023</span></p>
                    </div>
                    <div>
                      <p>Services: <span>Full Laundry, Iron only.</span></p>
                    </div>
                    <div>
                      <p>Delivery Date: <span>Feb 19,2023</span></p>
                    </div>
                    <div>
                      <p>Pickup up Address:<span>1234 Lagos Street, Victoria Island</span></p>
                    </div>
                    <div>
                      <p>Delivery status:<span>Express Delivery</span></p>
                    </div>
                  </div>
                  <div className='text-center mt-3'>
                    <Button
                      variant='contained'
                      className='px-5'
                      style={{ backgroundColor: '#35A7FF', borderRadius: '10px', textTransform: 'capitalize' }}
                      onClick={() => {
                        handleSubmitOrder();
                      }}
                    >
                      Submit Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </>

  )
}

export default OrderSummary