import React, { useState } from "react";
import SortBy from "../Commons/SortBy";
import Table from 'react-bootstrap/Table';
import SmallSearchBar from "../Commons/SmallSearchBar";
import './MyOrder.css'
import InvoiceDetails from "./InvoiceDetails";

interface InvoiceData {
    invoiceId: string;
    orderId: string;
    amount: string;
    orderDate: string;
}


const MyInvoice = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const [invoice, setInvoice] = useState<InvoiceData[]>([
        {
            invoiceId: 'INV-142023',
            orderId: '1234567',
            amount: '5,600',
            orderDate: 'Feb 19,2023',
        },
        {
            invoiceId: 'INV-142023',
            orderId: '1234567',
            amount: '5,600',
            orderDate: 'Feb 19,2023',
        },
        {
            invoiceId: 'INV-142023',
            orderId: '1234567',
            amount: '5,600',
            orderDate: 'Feb 19,2023',
        },
    ]);

    const [invoiceDetailClicked, setInvoiceDetailClicked] = useState(false);

    const handleInvoiceDetail = () => {
        setInvoiceDetailClicked(true);
    };
    return (
        <>
            <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                height: '700px',
                overflowY: 'scroll',
            }}>
                {invoiceDetailClicked ? (
                    <InvoiceDetails />
                ) : (
                    <>
                        <div className="justify-content-between-sm">
                            <div className="order-heading">
                                <h2>My Invoice</h2>
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
                                        <th>Invoice ID</th>
                                        <th>Order ID</th>
                                        <th>Amount (N)</th>
                                        <th>Order Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoice.map((invoice) => (
                                        <tr key={invoice.invoiceId}>
                                            <td>{invoice.invoiceId}</td>
                                            <td>{invoice.orderId}</td>
                                            <td>{invoice.amount}</td>
                                            <td>{invoice.orderDate}</td>
                                            <td>
                                                <button
                                                    className="border-0 bg-transparent"
                                                    style={{ color: '#35A7FF', font: '14px', fontWeight: '600', }}
                                                    onClick={() => {
                                                        handleInvoiceDetail();
                                                    }}>
                                                    View | Pay
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </Table>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default MyInvoice;