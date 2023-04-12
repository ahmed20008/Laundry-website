import React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import { deliveredOrder, pickedUp, processing, totalOrders } from '../../../assets';
import './OrderDetails.css';

const OrderDetails: React.FC = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-9 col-md-12 px-1">
                    <div className="bg-white mb-2 panel-shadow">
                        <div className="admin-dash-btn px-2">
                            <div>
                                <div className='my-auto mx-auto'>
                                    <div className='m-3'>
                                        <div className='text-center'>
                                            <img src={pickedUp} className='img-fluid' />
                                            <h4 className='pt-2'>Picked up</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='my-auto mx-auto'>
                                    <div className='m-3'>
                                        <div className='text-center'>
                                            <img src={processing} className='img-fluid' />
                                            <h4 className='pt-2'>Processing</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='my-auto mx-auto'>
                                    <div className='m-3'>
                                        <div className='text-center'>
                                            <img src={deliveredOrder} className='img-fluid' />
                                            <h4 className='pt-2'>Delivered</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 px-1">
                    <div className="create-order panel-shadow">
                        <button className='border-0 bg-transparent w-100'>
                            <div className="card d-flex justify-content-center align-items-center" style={{ height: '127px', border: '10px' }}>
                                <div>
                                    <div className='text-center'>
                                        <MessageIcon fontSize="large" />
                                    </div>
                                    <p>Send Message</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 px-1">
                    <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                        height: '560px',
                        overflowY: 'scroll',
                    }}>
                        <div className='order-details'>
                            <div>
                                <p>Order Date: <span>Feb 14, 2023</span></p>
                            </div>
                            <div>
                                <p>Order ID: <span>123456789</span></p>
                            </div>
                            <div>
                                <p>Services: <span>Full Laundry, Iron only.</span></p>
                            </div>
                            <div>
                                <p>Delivery Date: <span>Feb 19,2023</span></p>
                            </div>
                            <div>
                                <p>Delivery Address: <span>1234 Lagos Street, Victoria Island</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails