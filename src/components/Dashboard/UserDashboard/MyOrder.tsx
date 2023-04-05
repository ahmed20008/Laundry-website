import React, { useState } from "react";
import SortBy from "../Commons/SortBy";
import Table from 'react-bootstrap/Table';
import SmallSearchBar from "../Commons/SmallSearchBar";
import './MyOrder.css'
import OrderDetails from "./OrderDetails";


interface OrderData {
    orderDate: string;
    orderId: string;
    amount: string;
    deliveryDate: string;
    orderStatus: string;
}



const MyOrder = () => {

    const [orders, setOrders] = useState<OrderData[]>([
        {
            orderDate: 'Feb 14, 2023',
            orderId: '1234567',
            amount: '5,600',
            deliveryDate: 'Feb 19,2023',
            orderStatus: 'Picked up',
        },
        {
            orderDate: 'Feb 14, 2023',
            orderId: '1234567',
            amount: '3,500',
            deliveryDate: 'Feb 19,2023',
            orderStatus: 'Processing',
        },
        {
            orderDate: 'Feb 14, 2023',
            orderId: '1234567',
            amount: '4,500',
            deliveryDate: 'Feb 19,2023',
            orderStatus: 'Delivered',
        },
    ]);

    const [orderDetailClicked, setOrderDetailClicked] = useState(false);

    const handleOrderDetail = () => {
        setOrderDetailClicked(true);
    };

    return (
        <>
            {orderDetailClicked ? (<OrderDetails />) : (
                <>
                    <div className="bg-white panel-shadow px-5 py-4" style={{
                        height: '700px',
                        overflowY: 'scroll',
                    }}>
                        <div className="justify-content-between-sm">
                            <div className="order-heading">
                                <h2>My orders</h2>
                            </div>
                            <div className="justify-content-between-sm">
                                <SmallSearchBar />
                                <div>
                                    <SortBy />
                                </div>
                            </div>
                        </div>
                        <div className="order-table pt-5">
                            <Table striped hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Order date</th>
                                        <th>Order ID</th>
                                        <th>Amount (N)</th>
                                        <th>Delivery Date</th>
                                        <th>Order Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.orderId}>
                                            <td>{order.orderDate}</td>
                                            <td>{order.orderId}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.deliveryDate}</td>
                                            <td>{order.orderStatus}</td>
                                            <td>
                                                <button
                                                    className="border-0 bg-transparent"
                                                    style={{ color: '#35A7FF', font: '14px' }}
                                                    onClick={() => {
                                                        handleOrderDetail();
                                                    }}
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </Table>
                        </div>
                    </div >
                </>
            )}
        </>
    );
}

export default MyOrder;