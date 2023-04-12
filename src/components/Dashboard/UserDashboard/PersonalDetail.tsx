import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PhoneInput from 'react-phone-number-input';
import Button from '@mui/material/Button';
import ProfileUpdated from './ProfileUpdated';
import './PersonalDetail.css';

interface Props {
  // Props go here
}

const PersonalDetail: React.FC<Props> = (props) => {

  const [updatedProfileClicked, setUpdatedProfileClicked] = useState(false);

  const handleUpdateProfileClick = () => {
    setUpdatedProfileClicked(true);
  };


  const [value, setValue] = useState<string>();

  return (
    <>
      {updatedProfileClicked ? (
        <ProfileUpdated />
      ) : (
        <>
          <div>
            <div className="bg-white panel-shadow px-5 py-4 mt-md-1"
              style={{
                height: '700px',
                overflowY: 'scroll',
              }}
            >
              <div className="personal-details">
                <h1>Profile</h1>
              </div>
              <div className="profile-form pt-4">
                <div>
                  <Form>
                    <Row>
                      <div className='col-md-6'>
                        <Form.Group className="mb-4" >
                          <Form.Label>Firstname</Form.Label>
                          <Form.Control type="text" size='lg' defaultValue="Frederick" placeholder="Enter Your First Name" />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Lastname</Form.Label>
                          <Form.Control type="text" size='lg' defaultValue="Jones" placeholder="Enter Your Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" size='lg' defaultValue="frederickjones10@gmail.com" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Phone Number</Form.Label>
                          <PhoneInput className='mb-4 signup-form'
                            international={false}
                            defaultCountry="NG"
                            value={value}
                            onChange={setValue} />
                        </Form.Group>
                      </div>
                      <div className='col-md-6'>
                        <Form.Group className="mb-4">
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" size='lg' defaultValue="1234 Lagos street Victoria Island" placeholder="Enter Your Address" />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label>Apt/Suite (Optional)</Form.Label>
                          <Form.Control type="text" size='lg' defaultValue="Flat 247" placeholder="Enter Your Address" />
                        </Form.Group>
                        <Row>
                          <Col>
                            <Form.Group className="mb-4">
                              <Form.Label>Zip Code</Form.Label>
                              <Form.Control type="text" size='lg' pattern="\d{6}" defaultValue="123456" placeholder="Enter Your Address" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-4">
                              <Form.Label>City</Form.Label>
                              <Form.Control type="text" size='lg' defaultValue="Lagos" placeholder="Enter Your City" />
                            </Form.Group>
                          </Col>
                          <div className='text-end pt-4'>
                            <Button
                              variant="contained"
                              className='px-5 py-2'
                              onClick={handleUpdateProfileClick}
                              style={{ backgroundColor: '#35A7FF', fontWeight: '600' }}>
                              Update Profile
                            </Button>
                          </div>
                        </Row>
                      </div>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default PersonalDetail;