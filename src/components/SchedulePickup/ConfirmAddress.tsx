import React, { useState } from 'react';
import { ConfirmAddressImg, addAddressImg, dashboardBackground, homeAddressImg } from '../../assets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './SchedulePickup.css';
import { Form } from 'react-bootstrap';
import { Button } from '@mui/material';
import OrderSummary from './OrderSummary';

interface AddressData {
    address: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}


const ConfirmAddress: React.FC = () => {


    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState<AddressData>({
        address: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    });
    const [addresses, setAddresses] = useState<AddressData[]>([]);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAddresses((prevAddresses) => [...prevAddresses, formData]);
        setFormData({
            address: '',
            street: '',
            city: '',
            state: '',
            zip: '',
        });
    };

    const handleSelectAddress = (index: number) => {
        setSelectedAddressIndex(index);
    };


    const handleGoBackClick = () => {
        window.history.back();
    };

    const [confirmAddressClicked, setConfirmAddressClicked] = useState(false);

    const handleConfirmAddress = () => {
        setConfirmAddressClicked(true);
    };

    return (
        <>
            {confirmAddressClicked ? (
                <OrderSummary />
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
                                    Confirm Address
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
                                        <img src={ConfirmAddressImg} alt="Schedule Pickup" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                                <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                                    height: '700px',
                                    overflowY: 'scroll',
                                }}>
                                    <div>
                                        <div className='address-heading pb-5'>
                                            <h2>Select Address</h2>
                                            <p>Select Pick-up & delivery address</p>
                                        </div>
                                        {addresses.length > 0 && (
                                            <div className='new-address-form pb-3'>
                                                <ul className='p-0'>
                                                    {addresses.map((address, index) => (
                                                        <li key={index} style={{ listStyle: 'none', paddingBottom: '1.5rem' }}>
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    name="address"
                                                                    value={index}
                                                                    checked={selectedAddressIndex === index}
                                                                    onChange={() => handleSelectAddress(index)}
                                                                    onClick={() => { handleConfirmAddress(); }}
                                                                />
                                                                <span className='ps-4 pe-4'><img src={homeAddressImg} /> Home {index+1}</span>
                                                                {address.address}, {address.city}, {address.state} {address.zip}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {/* {selectedAddressIndex !== null && (
                                    <button onClick={() => console.log(`Selected address: ${addresses[selectedAddressIndex]}`)}>
                                        Next
                                    </button>
                                )} */}
                                        <div className='new-address-form'>
                                            <label className='checkbox-label'>
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={(e) => setIsChecked(e.target.checked)}
                                                />
                                                <span className='ps-4'><img src={addAddressImg} /> Add new</span>
                                            </label>
                                            {isChecked && (
                                                <div className="row">
                                                    <div className='col-md-8 offset-md-4 col-sm-12 pt-4'>
                                                        <div className="add-address-form">
                                                            <Form onSubmit={handleSubmit}>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Control size='lg' type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" required />
                                                                </Form.Group>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Control size='lg' type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Enter Street" required />
                                                                </Form.Group>
                                                                <div className='row'>
                                                                    <div className="col-md-6">
                                                                        <Form.Group className="mb-3">
                                                                            <Form.Control size='lg' type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter City" required />
                                                                        </Form.Group>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <Form.Group className="mb-3">
                                                                            <Form.Control size='lg' type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter State" required />
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Control size='lg' type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Enter Zip Code" required />
                                                                </Form.Group>
                                                                <div className="text-end">
                                                                    <Button
                                                                        variant='contained'
                                                                        type="submit"
                                                                        style={{ backgroundColor: '#35A7FF', borderRadius: '10px', textTransform: 'capitalize' }}
                                                                    >
                                                                        Add Address
                                                                    </Button>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ConfirmAddress