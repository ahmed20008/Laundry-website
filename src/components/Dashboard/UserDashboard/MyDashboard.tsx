import React from 'react';
import { helpCenter, invoice, myOrderBtn, myWallet, refer } from '../../../assets';
import Button from '@mui/material/Button';
import './MyDashboard.css';

interface Button {
  name: string;
  logo: string;
}

interface MyDashboardProps {
  buttons: Button[],
  onButtonClick: (id: Number) => void,
  menuStartIndex: Number,
}


const MyDashboard: React.FC<MyDashboardProps> = ({ onButtonClick, buttons, menuStartIndex }: MyDashboardProps) => {
  console.log("butn",buttons)
  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-12 px-1">
          <div className="bg-white mb-2 panel-shadow">
            <div className="user-dash-btn p-4">
              {
                buttons.map((btn, index) => {
                  return (
                    <div className='m-3'>
                      <button className='border-0 bg-transparent p-0' onClick={() => onButtonClick( Number(index) + Number(menuStartIndex)) }>
                        <div className="card border-0 bg-transparent">
                          <img src={btn.logo} className='img-fluid' />
                          <p>{btn.name}</p>
                        </div>
                      </button>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="bg-white panel-shadow mt-md-1">
            <div className="packages px-4 pt-4">
              <h2 className='pb-3'>Subscriptions and Packages</h2>
              <div className="row">
                <div className="col-md-4 px-1">
                  <div className="our-packages py-4">
                    <div className="card" style={{ border: '2px solid #818181', borderRadius: '13px' }}>
                      <div className="our-plans">
                        <div className="plans-type">
                          <h3>STANDARD</h3>
                          <p>Extra clothes cost N500 each.</p>
                        </div>
                        <div className="our-price pt-2">
                          <h1>N 2,500<span>/week</span></h1>
                        </div>
                        <div className="d-flex justify-content-center">
                        </div>
                        <div className="plans-points">
                          <ul>
                            <li>Wash and fold</li>
                            <li>3 pieces of clothes</li>
                            <li>Pick-up</li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <button className='btn' style={{
                            background: '#35A7FF',
                            borderRadius: '3px',
                            fontSize: '16px',
                            color: '#fff',
                            fontWeight: '500',
                          }}>
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="our-packages py-4">
                    <div className="card" style={{ border: '2px solid #EFF6F3', backgroundColor: '#EFF6F3', borderRadius: '13px' }}>
                      <div className="our-plans">
                        <div className="plans-type">
                          <div className='text-end subscribed'>
                            <p>SUBSCRIBED</p>
                          </div>
                          <h3>STANDARD</h3>
                          <p>Extra clothes cost N500 each.</p>
                        </div>
                        <div className="our-price pt-2">
                          <h1>N 5,000<span>/week</span></h1>
                        </div>
                        <div className="d-flex justify-content-center">
                        </div>
                        <div className="plans-points">
                          <ul>
                            <li>Wash and fold</li>
                            <li>5 pieces of clothes</li>
                            <li>Door Delivery</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="our-packages py-4">
                    <div className="card" style={{ border: '2px solid #818181', borderRadius: '13px' }}>
                      <div className="our-plans">
                        <div className="plans-type">
                          <h3>PRO</h3>
                          <p>Extra clothes cost N500 each.</p>
                        </div>
                        <div className="our-price pt-2">
                          <h1>N 12,500<span>/week</span></h1>
                        </div>
                        <div className="d-flex justify-content-center">
                        </div>
                        <div className="plans-points">
                          <ul>
                            <li>Wash and fold</li>
                            <li>8 pieces of clothes</li>
                            <li>Pick-up & Delivery</li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <button className='btn' style={{
                            background: '#35A7FF',
                            borderRadius: '3px',
                            fontSize: '16px',
                            color: '#fff',
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
            </div>
            <div className='text-end pe-4 pb-4'>
              <p style={{
                color: '#818181',
                fontSize: '12px',
              }}>
                Upgrade to PRO and get unlimited
                <br />
                free pick up and delivery for all
                <br />
                your orders.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 px-1">
          <div className="panel-shadow mt-md-1">
            <div className="redeem">
              <div className="card px-4 py-2">
                <h2>My Points</h2>
                <div className='points text-center'>
                  <h1>1456</h1>
                </div>
                <div className='text-center'>
                  <Button
                    variant='contained'
                    className='px-5 mt-1'
                    style={{
                      background: '#35A7FF',
                      borderRadius: '10px'
                    }}
                  >
                    Redeem</Button>
                </div>
              </div>
            </div>
          </div>
          <div className='panel-shadow'>
            <div className="stats mt-3">
              <div className="card px-4 py-3 my-auto">
                <h2 className='pb-2'>Stats</h2>
                <div className='text-center d-flex justify-content-center align-items-center'>
                  <div className='px-3'>
                    <h1>10</h1>
                    <p>Total Laundry <br /> Completed</p>
                  </div>
                  <div className="vertical-line mx-2"></div>
                  <div className='px-3'>
                    <h1>02</h1>
                    <p>Friends <br /> referred</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="refer mt-3">
            <div className="card px-4 py-4" style={{ backgroundImage: `url(${refer})` }}>
              <div className="card-content">
                <h2>Refer-a-Friend</h2>
                <div className='pt-3'>
                  <h3>10% off for you and your friend</h3>
                  <p>Refer a friend and win</p>
                </div>
                <div className='text-center pt-3'>
                  <Button
                    variant='contained'
                    className='px-5 mt-1 text-capitalize'
                    style={{
                      background: '#35A7FF',
                      fontSize: '16px',
                      borderRadius: '10px'
                    }}>
                    Redeem</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDashboard;

