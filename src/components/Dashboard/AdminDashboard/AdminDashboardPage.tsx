import React, { useState } from 'react';
import { completedOrders, newOrders, orderDetailsLogo, totalOrders } from '../../../assets';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import './AdminDashboardPage.css';
import SortBy from '../Commons/SortBy';
import SmallSearchBar from '../Commons/SmallSearchBar';
import AdminOrderDetail from '../Commons/AdminOrderDetail';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

interface Order {
  name: string;
  image: string;
  count: number;
}

const orders: Order[] = [
  {
    name: 'New Orders',
    image: newOrders,
    count: 12,
  },
  {
    name: 'Completed Orders',
    image: completedOrders,
    count: 35,
  },
  {
    name: 'Total Orders',
    image: totalOrders,
    count: 189,
  },
];

interface OrderDetail {
  id: string;
  pickupDate: string;
  deliveryDate: string;
  name: string;
  image: string;
}

const initialOrders: OrderDetail[] = [
  {
    id: '23022023L24',
    pickupDate: 'December 23, 2018',
    deliveryDate: 'December 23, 2018',
    name: 'Adeoluwa John',
    image: orderDetailsLogo,
  },
  {
    id: '23022023L25',
    pickupDate: 'December 24, 2018',
    deliveryDate: 'December 25, 2018',
    name: 'Olumide Ayodele',
    image: orderDetailsLogo,
  },
  {
    id: '23022023L26',
    pickupDate: 'December 26, 2018',
    deliveryDate: 'December 27, 2018',
    name: 'Bukola Adesola',
    image: orderDetailsLogo,
  },
];

const AdminDashboardPage: React.FC = () => {

  const [ordersDetail, setOrdersDetail] = useState(initialOrders);
  const [dataIndex, setDataIndex] = useState<Number>(0);

  const [adminOrderDetailClicked, setAdminOrderDetailClicked] = useState(false);

  const handleAdminOrderDetail = (index: Number) => {
    setAdminOrderDetailClicked(true);
    setDataIndex(index);
  };

  const navigate = useNavigate();
  function handleCheckInClothes(): void {
    navigate('/check-in');
  }

  return (
    <>
      {adminOrderDetailClicked ? (
        <AdminOrderDetail order={initialOrders[Number(dataIndex)]} />
      ) : (
        <>
          <div className="row">
            <div className="col-lg-9 col-md-12 px-1">
              <div className="bg-white mb-2 panel-shadow">
                <div className="admin-dash-btn py-1">
                  {orders.map((order, index) => (
                    <div className='my-auto mx-auto' key={index}>
                      <div className='m-3 d-flex'>
                        <div className='my-auto'>
                          <img src={order.image} className='img-fluid' />
                        </div>
                        <div className='text-start ps-3'>
                          <h4 className='mb-0'>{order.name}</h4>
                          <h2 className='mb-0'>{order.count}</h2>
                          <div className='duration-dropdown'>
                            <Form.Select>
                              <option>This Month</option>
                              <option>This week</option>
                              <option>Today</option>
                            </Form.Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 px-1">
              <div className="create-order panel-shadow">
                <button className='border-0 bg-transparent w-100'
                  onClick={() => { handleCheckInClothes(); }}
                >
                  <div className="card d-flex justify-content-center align-items-center" style={{ height: '127px', border: '10px' }}>
                    <div>
                      <div className='text-center'>
                        <AddBoxIcon fontSize="large" />
                      </div>
                      <p>Create new order</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 px-1">
              <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                height: '630px',
                overflowY: 'scroll',
              }}>
                <div className="justify-content-between-sm">
                  <div className="order-heading">
                    <h2>Recent Orders</h2>
                  </div>
                  <div className="justify-content-between-sm">
                    <SmallSearchBar />
                    <div>
                      <SortBy />
                    </div>
                  </div>
                </div>

                <div>
                  {ordersDetail.map((orderDetail, index) => (
                    <div key={orderDetail.id} className='recent-orders py-2'>
                      <div className="card px-3 py-3">
                        <div className="order-top">
                          <h4>Order ID: <span>{orderDetail.id}</span></h4>
                          <p className='time'>9:08AM</p>
                        </div>
                        <div className="pick-delivery-date py-2">
                          <p>Pickup date: <span>{orderDetail.pickupDate}</span></p>
                          <p className='delivery-date'>Delivery date: <span>{orderDetail.deliveryDate}</span></p>
                        </div>
                        <div className="order-bottom">
                          <div className='d-flex align-items-center'>
                            <div><img src={orderDetail.image} className='img-fluid pe-3' alt="" /></div>
                            <div><p>{orderDetail.name} </p></div>
                          </div>
                          <div className='order-detail-btn'>
                            <Button variant='contained'
                              style={{ backgroundColor: '#35A7FF', borderRadius: '10px' }}
                              onClick={() => {
                                handleAdminOrderDetail(index);
                              }}
                            >
                              Order Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default AdminDashboardPage