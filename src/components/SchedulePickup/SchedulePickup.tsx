import React, { useState } from 'react';
import { SchedulePickupImg, dashboardBackground } from '../../assets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import { Form, FormLabel } from 'react-bootstrap';
import './SchedulePickup.css';
import ConfirmAddress from './ConfirmAddress';


interface CheckRadioProps {
  label: string;
  value: string;
}


const SchedulePickup: React.FC = () => {

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  const handleGoBackClick = () => {
    window.history.back();
  };

  const [confirmAddressClicked, setConfirmAddressClicked] = useState(false);

  const handleConfirmAddress = () => {
    setConfirmAddressClicked(true);
  };

  const checkRadioProps: CheckRadioProps[] = [
    { label: 'Full Laundry', value: 'option1' },
    { label: 'Wash only', value: 'option2' },
    { label: 'Iron Only', value: 'option3' },
    { label: 'Wash and Iron', value: 'option4' },
  ];

  return (
    <>
      {confirmAddressClicked ?
        (<ConfirmAddress />) : (
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
                      <img src={SchedulePickupImg} alt="Schedule Pickup" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12">
                  <div className="bg-white panel-shadow px-5 py-4" style={{
                    height: '700px',
                    overflowY: 'scroll',
                  }}>
                    <div className="schedule-pickup">
                      <h2>Schedule pickup</h2>
                      <p>Pickup and Delivery Between 8:00 am to 10:00 pm Mondays to Saturdays.</p>
                    </div>
                    <div className="pickup-form pt-4">
                      <div className="w-75 sm-w-100">
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Pickup date</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                          <div className='pb-3'>
                            <Form.Label>Select Service</Form.Label>
                            {checkRadioProps.map((option, index) => (
                              <Form.Check
                                key={index}
                                type="checkbox"
                                label={option.label}
                                name="checkRadios"
                                value={option.value}
                                checked={selectedValues.includes(option.value)}
                                onChange={handleCheckboxChange}
                              />
                            ))}
                          </div>
                          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description (Optional)</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                          </Form.Group>
                          <p>Delivery is 5days after pickup is scheduled.</p>
                          <div className="express-delivery d-flex mt-3">
                            <p className='pe-4'>Don’t want to wait?</p>
                            <Form.Group>
                              <Form.Check aria-label="option 1" label="Express delivery (Next day)" />
                            </Form.Group>
                          </div>
                          <div className='text-end mt-4'>
                            <Button
                              type="submit"
                              variant='contained'
                              style={{backgroundColor: '#35A7FF', borderRadius: '10px', textTransform: 'capitalize'}}
                              onClick={() => {
                                handleConfirmAddress();
                              }}>
                              Confirm Pickup
                            </Button>
                          </div>
                        </Form>
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

export default SchedulePickup;