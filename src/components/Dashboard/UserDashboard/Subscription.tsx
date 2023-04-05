import React, { useState } from 'react';
import { Table, Tab, Tabs } from 'react-bootstrap';
import Button from '@mui/material/Button';
import './Subscription.css';

interface SubscriptionData {
  item: string;
  startDate: string;
  endDate: string;
  nextBilling: string;
  price: string;
}

const initialSubscriptions: SubscriptionData[] = [
  {
    item: 'Premium Subscription',
    startDate: '01/02/2023',
    endDate: 'Not yet ended',
    nextBilling: '01/03/2023',
    price: 'N7,500',
  },
  {
    item: 'Premium Subscription',
    startDate: '01/02/2023',
    endDate: 'Not yet ended',
    nextBilling: '01/03/2023',
    price: 'N7,500',
  },
];

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState<SubscriptionData[]>(initialSubscriptions);

  return (
    <>
      <div
        className="bg-white panel-shadow px-5 py-4"
        style={{ height: '700px', overflowY: 'scroll' }}
      >
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
              <div className="subscription-data">
                <h2 className="px-3 py-3">Active Subscriptions</h2>
                <div className="subscription-table">
                  <Table bordered>
                    <thead>
                      <tr className="bg-light table-heading">
                        <th>Item</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Next Billing</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptions.map((subscription, index) => (
                        <tr key={index} className="table-body">
                          <td>{subscription.item}</td>
                          <td>{subscription.startDate}</td>
                          <td>{subscription.endDate}</td>
                          <td>{subscription.nextBilling}</td>
                          <td>{subscription.price}</td>
                        </tr>
                      ))}
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
        <div className="text-end mt-4">
          <Button
            variant="contained"
            style={{
              borderRadius: '10px',
              backgroundColor: '#35A7FF',
            }}
          >
            Upgrade to PRO
          </Button>
        </div>
        <div className="text-end mt-2">
          <button
            className="border-0 bg-transparent"
            style={{ fontSize: '14px', color: '#818181' }}
          >
            Cancel membership
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
