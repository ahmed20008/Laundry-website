import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { checkInClothes, dashboardBackground } from '../../assets';
import './CheckInClothes.css'
import { Form, Table } from 'react-bootstrap';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReviewOrder from './ReviewOrder';


interface ClothesData {
    clothes: string;
    category: string;
    quantity: number;
    serviceType: string;
    amount: number;
    subTotal: number;
}


const initialClothesData: ClothesData[] = [
    {
        clothes: 'Jeans',
        category: 'Bottoms',
        quantity: 2,
        serviceType: 'Wash and iron',
        amount: 700,
        subTotal: 3500,
    },
    {
        clothes: 'Bed Sheets',
        category: 'Bottoms',
        quantity: 2,
        serviceType: 'Wash and iron',
        amount: 700,
        subTotal: 3500,
    },
    {
        clothes: 'T-shirts',
        category: 'Bottoms',
        quantity: 2,
        serviceType: 'Wash and iron',
        amount: 700,
        subTotal: 3500,
    },
];

const CheckInClothes: React.FC = () => {

    const [clothesData, setClothesData] = useState(initialClothesData);

    // function to handle deleting a row
    const handleDeleteRow = (clothes: string) => {
        const updatedClothesData = clothesData.filter(
            (clothesItem) => clothesItem.clothes !== clothes
        );
        setClothesData(updatedClothesData);
    };

    const handleGoBackClick = () => {
        window.history.back();
    };


    const [checkInClicked, setCheckInClicked] = useState(false);

    const handleCheckIn = () => {
        setCheckInClicked(true);
    };


    return (
        <>
            {checkInClicked ? (<ReviewOrder />) : (
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
                                    Check in Clothes
                                </h1>
                            </div>
                        </div>
                    </section>
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
                                        <img src={checkInClothes} alt="Schedule Pickup" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                                <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                                    height: '700px',
                                    overflowY: 'scroll',
                                }}>
                                    <div className="checkin-clothes py-2">
                                        <p className='text-center'>New customer?
                                            <span>
                                                <button className='border-0 bg-transparent'>Register here</button>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="checkin-form">
                                        <Form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Select className='mb-3' size='lg'>
                                                        <option>Select Customer</option>
                                                        <option>Kate Jane</option>
                                                        <option>Joshua Adetokunbo</option>
                                                        <option>Michael Isiuzo</option>
                                                        <option>Michael Isiuzo</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Select className='mb-3' size='lg'>
                                                        <option>Clothes Type</option>
                                                        <option>Bottoms</option>
                                                        <option>Full body</option>
                                                        <option>Under garments</option>
                                                        <option>Others</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Select className='mb-3' size='lg'>
                                                        <option>Service Type</option>
                                                        <option>Wash and iron</option>
                                                        <option>Wash only</option>
                                                        <option>Iron only</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Control type="text" size='lg' placeholder="Quantity" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className='text-end'>
                                                <Button
                                                    className='text-capitalize px-5'
                                                    style={{ backgroundColor: '#35A7FF', borderRadius: '10px' }}
                                                    variant='contained' >
                                                    Add
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="checkin-table">
                                        <div className="expense-table pt-4">
                                            <Table striped hover>
                                                <thead>
                                                    <tr>
                                                        <th>Clothes</th>
                                                        <th>Category</th>
                                                        <th>Quantity</th>
                                                        <th>Service type</th>
                                                        <th>Amount</th>
                                                        <th>Sub total</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {clothesData.map((clothesItem) => (
                                                        <tr key={clothesItem.clothes}>
                                                            <td>{clothesItem.clothes}</td>
                                                            <td>{clothesItem.category}</td>
                                                            <td>{clothesItem.quantity}</td>
                                                            <td>{clothesItem.serviceType}</td>
                                                            <td>{clothesItem.amount}</td>
                                                            <td>{clothesItem.subTotal}</td>
                                                            <td>
                                                                <button className="border-0 bg-transparent">
                                                                    <EditIcon />
                                                                </button>
                                                                <button
                                                                    className="border-0 bg-transparent"
                                                                    onClick={() => handleDeleteRow(clothesItem.clothes)}
                                                                >
                                                                    <DeleteOutlineIcon />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="express-delivery">
                                        <Form.Group>
                                            <Form.Check aria-label="option 1" label="Express delivery (Next day)" />
                                        </Form.Group>
                                    </div>
                                    <div className='text-end'>
                                        <Button
                                            variant='contained'
                                            className='px-4'
                                            style={{ backgroundColor: '#35A7FF', borderRadius: '10px', }}
                                            onClick={() => {
                                                handleCheckIn();
                                            }}
                                        >
                                            Check-in
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

export default CheckInClothes