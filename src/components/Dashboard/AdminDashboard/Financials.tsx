import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { balancePayment, operationalExpenses, recievedPayment } from '../../../assets';
import SmallSearchBar from '../Commons/SmallSearchBar';
import SortBy from '../Commons/SortBy';
import { Form, Table } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import AddExpense from './AddExpense';


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

interface RecentTransactions {
  invoice: string;
  date: string;
  amount: string;
  customerName: string;
  customerEmail: string;
  status: 'active' | 'inactive';
}


const initialCustomers: RecentTransactions[] = [
  {
    invoice: 'INV-3066',
    date: 'Feb 14, 2023',
    amount: 'N  2,500',
    customerName: 'Esther Omogbemi',
    customerEmail: 'esther omogbemi@gmail.com ',
    status: 'active',
  },
  {
    invoice: 'INV-3066',
    date: 'Feb 14, 2023',
    amount: 'N  2,500',
    customerName: 'Esther Omogbemi',
    customerEmail: 'esther omogbemi@gmail.com ',
    status: 'inactive',
  },
  {
    invoice: 'INV-3066',
    date: 'Feb 14, 2023',
    amount: 'N  2,500',
    customerName: 'Esther Omogbemi',
    customerEmail: 'esther omogbemi@gmail.com ',
    status: 'active',
  },
  {
    invoice: 'INV-3066',
    date: 'Feb 14, 2023',
    amount: 'N  2,500',
    customerName: 'Esther Omogbemi',
    customerEmail: 'esther omogbemi@gmail.com ',
    status: 'active',
  },
  {
    invoice: 'INV-3066',
    date: 'Feb 14, 2023',
    amount: 'N  2,500',
    customerName: 'Esther Omogbemi',
    customerEmail: 'esther omogbemi@gmail.com ',
    status: 'inactive',
  },
  {
    invoice: 'INV-3066',
    date: 'Feb 14, 2023',
    amount: 'N  2,500',
    customerName: 'Esther Omogbemi',
    customerEmail: 'esther omogbemi@gmail.com ',
    status: 'inactive',
  }
];

const Financials: React.FC = () => {


  const [recentTransactions, setRecentTransactions] = useState<RecentTransactions[]>(initialCustomers);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedTransactions = recentTransactions.slice(startIndex, endIndex);

  const [addExpenseClicked, setAddExpenseClicked] = useState(false);

  const handleAddExpenseClicked = () => {
    setAddExpenseClicked(true);
  };

  return (
    <>
      {addExpenseClicked ?
        (<AddExpense />) : (
          <>
            <div className="row">
              <div className="col-lg-9 col-md-12 px-1">
                <div className="bg-white mb-2 panel-shadow">
                  <div className="admin-dash-btn px-4 py-1">
                    {finance.map((finance, index) => (
                      <div className='my-auto mx-auto' key={index}>
                        <div className='m-3 d-flex'>
                          <div className='my-auto'>
                            <img src={finance.image} className='img-fluid' />
                          </div>
                          <div className='text-start ps-3'>
                            <h4 className='mb-0'>{finance.name}</h4>
                            <h2 className='mb-0'>{finance.amount}</h2>
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
                  <button className='border-0 bg-transparent w-100'
                    onClick={() => {
                      handleAddExpenseClicked();
                    }}
                  >
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
            <div className="row">
              <div className="col-md-12">
                <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                  height: '620px',
                  overflowY: 'scroll',
                }}>
                  <div className="justify-content-between-sm">
                    <div className="order-heading">
                      <h2>Recent Transactions</h2>
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
                            <th scope="col">Invoice</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Customer details</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {displayedTransactions.map((transactions, index) => (
                            <tr key={index}>
                              <td>{transactions.invoice}</td>
                              <td>{transactions.date}</td>
                              <td>{transactions.amount}</td>
                              <td>{transactions.customerName}<br /><span className='email'>{transactions.customerEmail}</span></td>
                              <td className={transactions.status}>
                                <button>
                                  {transactions.status === 'active' ? 'Active' : 'Inactive'}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      <div className='justify-content-between-sm'>
                        <p className='pt-4' style={{ color: '#B5B7C0', fontSize: '14px' }}>Showing data 1 to {itemsPerPage}</p>
                        <Pagination
                          count={Math.ceil(recentTransactions.length / itemsPerPage)}
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
        )}
    </>
  )
}

export default Financials