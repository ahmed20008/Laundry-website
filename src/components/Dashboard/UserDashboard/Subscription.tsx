import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
            className="mb-3"
          >
            <Tab eventKey="Subscriptions" title="Subscriptions">
              Subscriptions
             
            </Tab>
            <Tab eventKey="Invoices" title="Invoices">
              Invoices
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Subscription;