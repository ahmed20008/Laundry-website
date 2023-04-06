import React from 'react'

const AdminOrderDetail: React.FC = () => {
  return (
    <>
      <div className="bg-white panel-shadow px-5 py-4" style={{
        height: '760px',
        overflowY: 'scroll',
      }}>
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1 style={{fontSize: '26px', fontWeight:'600', color: '#818181'}}>Order Details</h1>
              <div className='order-details pt-3'>
                <div>
                  <p>Costumer: <span>Frederick Jones</span></p>
                </div>
                <div>
                  <p>Order Date: <span>Feb 14, 2023</span></p>
                </div>
                <div>
                  <p>Order ID: <span>123456789</span></p>
                </div>
                <div>
                  <p>Services: <span>Full Laundry, Iron only.</span></p>
                </div>
                <div>
                  <p>Delivery Date: <span>Feb 19,2023</span></p>
                </div>
                <div>
                  <p>Delivery Address: <span>1234 Lagos Street, Victoria Island</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminOrderDetail