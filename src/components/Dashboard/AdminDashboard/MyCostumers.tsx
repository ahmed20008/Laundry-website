import React, { useState } from 'react'
import { SearchIcon, activeCostumers, allCoatumers, newCostumers } from '../../../assets';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SortBy from '../Commons/SortBy';
import Button from '@mui/material/Button';
import SmallSearchBar from '../Commons/SmallSearchBar';


interface CustomersButtons {
  image: string;
  title: string;
  value: number;
  subtitle: string;
}
const customersButtons: CustomersButtons[] = [
  {
    image: allCoatumers,
    title: "All Costumers",
    value: 124,
    subtitle: "This Month",
  },
  {
    image: activeCostumers,
    title: "Active Costumers",
    value: 35,
    subtitle: "This Month",
  },
  {
    image: newCostumers,
    title: "New Costumers",
    value: 189,
    subtitle: "This Month",
  },
];


const MyCostumers: React.FC = () => {

  const [customerButton, setCustomerButton] = useState(customersButtons);

  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-md-12 px-1">
          <div className="bg-white mb-3 panel-shadow">
            <div className="admin-dash-btn px-4 py-1">
              {customerButton.map((customerButton, index) => (
                <div key={index} className="my-auto mx-auto">
                  <button className="border-0 bg-transparent p-0">
                    <div className="m-3 d-flex">
                      <div className="my-auto">
                        <img src={customerButton.image} className="img-fluid" />
                      </div>
                      <div className="text-start ps-3">
                        <h4 className="mb-0">{customerButton.title}</h4>
                        <h2 className="mb-0">{customerButton.value}</h2>
                        <p>{customerButton.subtitle}</p>
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
                  <p>Add new customer</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 px-1">
          <div className="bg-white panel-shadow px-5 py-4" style={{
            height: '630px',
            overflowY: 'scroll',
          }}>
            <div className="justify-content-between-sm">
              <div className="order-heading">
                <h2>All Customers</h2>
              </div>
              <div className="justify-content-between-sm">
                <SmallSearchBar />
                <div>
                  <SortBy />
                </div>
              </div>
            </div>

            <div>
                text
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MyCostumers