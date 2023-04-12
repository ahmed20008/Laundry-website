import React, { useState } from 'react';
import { MessageText, customerDetailsInvoice, customerDetailsOrders, editExpenseLogo, sms } from '../../../assets';
import './CustomerDetail.css';
import { Form } from 'react-bootstrap';
import AddNewCustomer from './AddNewCustomer';

interface CustomerDetails {
    name: string;
    image: string;
    count: String;
}
const customer: CustomerDetails[] = [
    {
        name: 'Total Orders',
        image: customerDetailsOrders,
        count: "10",
    },
    {
        name: 'Due Invoice',
        image: customerDetailsInvoice,
        count: "06",
    },
];

interface CustomerDetailsProps {
    name: string;
    phone: string;
    email: string;
    address: string
    status: string;
}
interface Props {
    order: CustomerDetailsProps
}

const CusomerDetail: React.FC<Props> = ({ order }: Props) => {

    const { name, email, phone, address, status } = order;

    const [createCustomerClicked, setCreateCustomerClicked] = useState(false);

    const handleCreateCustomer = () => {
        setCreateCustomerClicked(true);
    };
    const [Status, setStatus] = useState(status);

    return (
        <>
            {createCustomerClicked ? (
                <AddNewCustomer />
            ) : (
                <>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 px-1">
                            <div className="bg-white mb-2 panel-shadow">
                                <div className="customer-dash-btn py-1">
                                    {customer.map((customer, index) => (
                                        <div className='my-auto mx-auto' key={index}>
                                            <div className='m-3 d-flex'>
                                                <div className='my-auto'>
                                                    <img src={customer.image} className='img-fluid' />
                                                </div>
                                                <div className='text-start ps-3'>
                                                    <h4 className='mb-0'>{customer.name}</h4>
                                                    <h2 className='mb-0'>{customer.count}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 px-1">
                            <div className="create-order panel-shadow">
                                <button className='border-0 bg-transparent w-100'>
                                    <div className="card d-flex justify-content-center align-items-center" style={{ height: '127px', border: '10px' }}>
                                        <div>
                                            <div className='text-center'>
                                                <img src={MessageText} />
                                            </div>
                                            <p>Send Mail</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 px-1">
                            <div className="create-order panel-shadow">
                                <button className='border-0 bg-transparent w-100'>
                                    <div className="card d-flex justify-content-center align-items-center" style={{ height: '127px', border: '10px' }}>
                                        <div>
                                            <div className='text-center'>
                                                <img src={sms} />
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
                                height: '630px',
                                overflowY: 'scroll',
                            }}>
                                <div className="text-end">
                                    <button className='bg-transparent border-0'
                                        onClick={() => {
                                            handleCreateCustomer();
                                        }}
                                    >
                                        <img src={editExpenseLogo} />
                                    </button>
                                </div>
                                <div className="customer-details">
                                    <div className='order-details'>
                                        <div>
                                            <p>Contact Name: <span>{name}</span></p>
                                        </div>
                                        <div>
                                            <p>Email Address: <span>{email}</span></p>
                                        </div>
                                        <div>
                                            <p>Phone Number: <span>{phone}</span></p>
                                        </div>
                                        <div>
                                            <p>Address: <span>{address}</span></p>
                                        </div>
                                        <div className="active pt-3 ps-3">
                                            <label className='d-flex'>
                                                <span
                                                    className='pe-3'
                                                    style={{ fontSize: '16px', color: '#292D32', fontWeight: '500' }}>
                                                    {status}
                                                </span>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    checked={status === 'active'}
                                                    onChange={() => {
                                                        if (status === 'active') {
                                                            setStatus('unactive');
                                                        } else {
                                                            setStatus('active');
                                                        }
                                                    }}
                                                />
                                            </label>
                                        </div>
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

export default CusomerDetail