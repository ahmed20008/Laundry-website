import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { balancePayment, operationalExpenses, recievedPayment } from '../../../assets';


interface Financial {
  name: string;
  image: string;
  amount: string;
}

const finance: Financial[] = [
  {
    name: 'Recieved Payment',
    image: recievedPayment,
    amount: 'N12,500',
  },
  {
    name: 'Operating Expenses',
    image: operationalExpenses,
    amount: 'N2,500',
  },
  {
    name: 'Balance Payment',
    image: balancePayment,
    amount: 'N7,500',
  },
];


const Financials: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-md-12 px-1">
          <div className="bg-white mb-3 panel-shadow">
            <div className="admin-dash-btn px-4 py-1">
              {finance.map((finance, index) => (
                <div className='my-auto mx-auto' key={index}>
                  <button className='border-0 bg-transparent p-0'>
                    <div className='m-3 d-flex'>
                      <div className='my-auto'>
                        <img src={finance.image} className='img-fluid' />
                      </div>
                      <div className='text-start ps-3'>
                        <h4 className='mb-0'>{finance.name}</h4>
                        <h2 className='mb-0'>{finance.amount}</h2>
                        <p>This Month</p>
                      </div>
                    </div>
                  </button>
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
                    <AddBoxIcon fontSize="large" />
                  </div>
                  <p>Add Expenses</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Financials