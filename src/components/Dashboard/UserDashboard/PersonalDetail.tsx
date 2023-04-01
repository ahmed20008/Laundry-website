import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PhoneInput from 'react-phone-number-input';
import Button from '@mui/material/Button';

interface Props {
  // Props go here
}

const PersonalDetail: React.FC<Props> = (props) => {

  const [value, setValue] = useState<string>();

  return (
    <>
      <div>
        <div className="bg-white panel-shadow px-5 py-4" style={{ height: '700px', }}>
          <div className="personal-details">
            <h1>Profile</h1>
          </div>
          <div className="profile-form">
            <div>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" >
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control type="text" defaultValue="Frederick" placeholder="Enter Your First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control type="text" defaultValue="Jones" placeholder="Enter Your Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" defaultValue="frederickjones10@gmail.com" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <PhoneInput className='mb-3 signup-form'
                        international={false}
                        defaultCountry="NG"
                        value={value}
                        onChange={setValue} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" defaultValue="1234 Lagos street Victoria Island" placeholder="Enter Your Address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Apt/Suite (Optional)</Form.Label>
                      <Form.Control type="text" defaultValue="Flat 247" placeholder="Enter Your Address" />
                    </Form.Group>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Zip Code</Form.Label>
                          <Form.Control type="text" pattern="\d{6}" defaultValue="123456" placeholder="Enter Your Address" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" defaultValue="Lagos" placeholder="Enter Your City" />
                        </Form.Group>
                      </Col>
                      <div className='text-end pt-3'>
                        <Button
                         variant="contained"
                         className='px-5 py-2'
                         style={{backgroundColor: '#35A7FF',}}>
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetail;