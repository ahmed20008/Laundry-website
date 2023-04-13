import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


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


const InvoiceDetails: React.FC = () => {

  const [clothesData, setClothesData] = useState(initialClothesData);


  return (
    <>
      <div className="check-in-review">
        <h3>Invoice ID: <span className='ps-2'>INV-2345</span></h3>
        <h3>Name:   <span className='ps-2'>Joshua Adetokunbo</span></h3>
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
              </tr>
            </thead>
            <tbody>
              {clothesData.map((clothesItem) => (
                <tr key={clothesItem.clothes}>
                  <td className='py-3'>{clothesItem.clothes}</td>
                  <td className='py-3'>{clothesItem.category}</td>
                  <td className='py-3'>{clothesItem.quantity}</td>
                  <td className='py-3'>{clothesItem.serviceType}</td>
                  <td className='py-3'>{clothesItem.amount}</td>
                  <td className='py-3'>{clothesItem.subTotal}</td>
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
              >
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceDetails