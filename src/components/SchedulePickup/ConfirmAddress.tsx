import React, { useState } from 'react';
import { ConfirmAddressImg, addAddressImg, dashboardBackground } from '../../assets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './SchedulePickup.css';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Form } from 'react-bootstrap';

interface AddressData {
    street: string;
    city: string;
    state: string;
    zip: string;
}


const ConfirmAddress: React.FC = () => {


    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState<AddressData>({
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

    return (
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

                                {addresses.length > 0 && (
                                    <div>
                                        <h2>Addresses:</h2>
                                        <ul>
                                            {addresses.map((address, index) => (
                                                <li key={index}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="address"
                                                            value={index}
                                                            checked={selectedAddressIndex === index}
                                                            onChange={() => handleSelectAddress(index)}
                                                        />
                                                        {address.street}, {address.city}, {address.state} {address.zip}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {selectedAddressIndex !== null && (
                                    <button onClick={() => console.log(`Selected address: ${addresses[selectedAddressIndex]}`)}>
                                        Next
                                    </button>
                                )}
                                <div className='new-address-form'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={(e) => setIsChecked(e.target.checked)}
                                        />
                                        <span className='ps-4'><img src={addAddressImg} /> Add new</span> 
                                    </label>
                                    {isChecked && (
                                        <Form onSubmit={handleSubmit}>
                                            <label>
                                                Street:
                                                <input name="street" value={formData.street} onChange={handleChange} />
                                            </label>
                                            <label>
                                                City:
                                                <input name="city" value={formData.city} onChange={handleChange} />
                                            </label>
                                            <label>
                                                State:
                                                <input name="state" value={formData.state} onChange={handleChange} />
                                            </label>
                                            <label>
                                                Zip:
                                                <input name="zip" value={formData.zip} onChange={handleChange} />
                                            </label>
                                            <button type="submit">Submit</button>
                                        </Form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ConfirmAddress