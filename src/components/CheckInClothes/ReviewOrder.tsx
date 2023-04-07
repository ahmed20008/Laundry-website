import React, { useState } from 'react'
import { checkInReview, dashboardBackground } from '../../assets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './CheckInClothes.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import { Table } from 'react-bootstrap';
import InvoiceSent from './InvoiceSent';


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



const ReviewOrder: React.FC = () => {

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

  const [sendInvoiceClicked, setSendInvoiceClicked] = useState(false);

  const handleSendInvoice = () => {
    setSendInvoiceClicked(true);
  };

  return (
    <>
      {sendInvoiceClicked ? (
        <InvoiceSent />
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
                  Review Order
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
                    <img src={checkInReview} alt="Schedule Pickup" />
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="bg-white panel-shadow px-5 py-4" style={{
                  height: '700px',
                  overflowY: 'scroll',
                }}>
                  <div className="check-in-review">
                    <h3>Invoice ID: <span className='ps-2'>INV-2345</span></h3>
                    <h3>Customer:   <span className='ps-2'>Joshua Adetokunbo</span></h3>
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
                  <div className="row">
                    <div className="col-md-6 offset-md-6">
                      <div className="total-invoice pt-4">
                        <div className='d-flex justify-content-between pb-2'>
                          <p>Delivery fee (Express) :</p>
                          <p>N1,500</p>
                        </div>
                        <div className='d-flex justify-content-between pb-2'>
                          <p>VAT (5%) :</p>
                          <p>N100</p>
                        </div>
                        <div className='d-flex justify-content-between pb-2 total-amount'>
                          <p>TOTAL :</p>
                          <p>N12,000</p>
                        </div>
                        <div className='text-end mt-2'>
                          <Button variant='contained'
                            className='px-4'
                            style={{ backgroundColor: '#35A7FF', borderRadius: '10px', }}
                            onClick={() => {
                              handleSendInvoice();
                            }}
                          >
                            Send Invoice
                          </Button>
                        </div>
                      </div>
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


export default ReviewOrder