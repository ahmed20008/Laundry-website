import React, { useState } from 'react'
import { activeCostumers, allCoatumers, infoCircle, newCostumers } from '../../../assets';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SortBy from '../Commons/SortBy';
import Table from 'react-bootstrap/Table';
import SmallSearchBar from '../Commons/SmallSearchBar';
import Pagination from '@mui/material/Pagination';
import './MyCostumers.css';
import { Form } from 'react-bootstrap';


interface CustomersButtons {
  image: string;
  title: string;
  value: number;
}
const customersButtons: CustomersButtons[] = [
  {
    image: allCoatumers,
    title: "All Costumers",
    value: 124,
  },
  {
    image: activeCostumers,
    title: "Active Costumers",
    value: 35,
  },
  {
    image: newCostumers,
    title: "New Costumers",
    value: 189,
  },
];

interface Customer {
  name: string;
  phone: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';
}


const initialCustomers: Customer[] = [
  {
    name: 'Frederick Jones',
    phone: '(225) 555-0118',
    email: 'Frederick@microsoft.com',
    address: 'Victoria Island Lagos',
    status: 'active',
  },
  {
    name: 'Frederick Jones',
    phone: '(225) 555-0118',
    email: 'Frederick@microsoft.com',
    address: 'Victoria Island Lagos',
    status: 'inactive',
  },
  {
    name: 'Frederick Jones',
    phone: '(225) 555-0118',
    email: 'Frederick@microsoft.com',
    address: 'Victoria Island Lagos',
    status: 'inactive',
  },
  {
    name: 'John Smith',
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    address: '123 Main St',
    status: 'active',
  },
  {
    name: 'John Smith',
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    address: '123 Main St',
    status: 'active',
  },
  {
    name: 'John Smith',
    phone: '(555) 123-4567',
    email: 'john.smith@example.com',
    address: '123 Main St',
    status: 'active',
  }
];


const MyCostumers: React.FC = () => {

  const [customerButton, setCustomerButton] = useState(customersButtons);

  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedCustomers = customers.slice(startIndex, endIndex);


  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-md-12 px-1">
          <div className="bg-white mb-3 panel-shadow">
            <div className="admin-dash-btn py-1">
              {customerButton.map((customerButton, index) => (
                <div key={index} className="my-auto mx-auto">
                  <div className="m-3 d-flex">
                    <div className="my-auto">
                      <img src={customerButton.image} className="img-fluid" />
                    </div>
                    <div className="text-start ps-3">
                      <h4 className="mb-0">{customerButton.title}</h4>
                      <h2 className="mb-0">{customerButton.value}</h2>
                      <div className='duration-dropdown'>
                        <Form.Select>
                          <option>This Month</option>
                          <option>This week</option>
                          <option>Today</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
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
          <div className="bg-white panel-shadow px-5 py-4 mt-md-1"
            style={{
              height: '620px',
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
              <div className="costumers-data pt-4">
                <Table>
                  <thead>
                    <tr>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedCustomers.map((customer, index) => (
                      <tr key={index}>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>
                        <td>{customer.address}</td>
                        <td className={customer.status}>
                          <button>
                            {customer.status === 'active' ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td>
                          <button className='border-0 bg-transparent'>
                            <img src={infoCircle} alt="" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className='justify-content-between-sm'>
                  <p className='pt-4' style={{ color: '#B5B7C0', fontSize: '14px' }}>Showing data 1 to {itemsPerPage}</p>
                  <Pagination
                    count={Math.ceil(customers.length / itemsPerPage)}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                    shape="rounded"
                    className='pt-4'
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MyCostumers