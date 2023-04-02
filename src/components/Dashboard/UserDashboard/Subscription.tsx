import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import './Subscription.css';

interface Props {
  // Props go here
}

const Subscription: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-white panel-shadow px-5 py-4" style={{
        height: '700px',
        overflowY: 'scroll',
      }}>
        <div className="subscription">
          <div className="subscription-heading pb-4">
            <h1>Subscriptions and Billing</h1>
            <p>Manage your active subscriptions and view your invoices</p>
          </div>
          <Tabs
            defaultActiveKey="Subscriptions"
            transition={false}
            id="Subscriptions"
          >
            <Tab eventKey="Subscriptions" title="Subscriptions">
              <div className='subscription-data'>
                <h2 className='px-3 py-3'>Active Subscriptions</h2>
                <div className="subscription-table">
                  <Table bordered >
                    <thead>
                      <tr className='bg-light table-heading'>
                        <th>Item</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Next Billing</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='table-body'>
                        <td>Premium Subscription</td>
                        <td>01/02/2023</td>
                        <td>Not yet ended</td>
                        <td>01/03/2023</td>
                        <td>N7,500</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Invoices" title="Invoices" disabled>
              Invoices
            </Tab>
          </Tabs>
        </div>
        <div className='text-end mt-4'>
          <Button variant='contained' style={{
            borderRadius: '10px',
            backgroundColor: '#35A7FF',
          }}>
            Upgrade to PRO
          </Button>
        </div>
        <div className='text-end mt-2'>
          <button className='border-0 bg-transparent' style={{fontSize: '14px', color: '#818181',}}>
            Cancel membership
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscription;