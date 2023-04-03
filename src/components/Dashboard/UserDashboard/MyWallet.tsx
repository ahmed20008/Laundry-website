import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import './MyWallet.css'

interface Transaction {
    id: number;
    title: string;
    date: string;
    amount: number;
    isNegative: boolean;
}

const transactionsData: Transaction[] = [
    {
        id: 1,
        title: "Wallet top-up",
        date: "June 4, 05:20pm",
        amount: 600,
        isNegative: false,
    },
    {
        id: 2,
        title: "Wallet top-up",
        date: "June 5, 02:30pm",
        amount: 200,
        isNegative: true,
    },
    {
        id: 3,
        title: "Wallet top-up",
        date: "June 6, 09:45am",
        amount: 1000,
        isNegative: false,
    },
];



    const MyWallet = () => {
    const [transactions, setTransactions] = useState<Transaction[]>(transactionsData);

        return (
            <>
                <div className="row">
                    <div className="col-lg-8 col-md-12 px-1">
                        <div className="bg-white mb-2 panel-shadow px-4 py-5" style={{
                            height: '700px',
                            overflowY: 'scroll',
                        }}>
                            <div className="add-funds pb-4">
                                <h2>Add funds to your account</h2>
                            </div>
                            <div className="add-funds-form">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="number" size="lg" placeholder="Enter Amount" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" as="textarea" rows={4} size="lg" placeholder="Enter Description" />
                                    </Form.Group>
                                    <div className="text-end">
                                        <Button variant="contained" style={{
                                            backgroundColor: '#35A7FF',
                                            fontSize: '18px',
                                            textTransform: 'capitalize',
                                            color: '#fff',
                                        }} >
                                            Make Payment
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 px-1">
                        <div className="panel-shadow">
                            <div className="redeem">
                                <div className="card px-4 py-3">
                                    <h2>Wallet Balance:</h2>
                                    <div className='wallet text-center pt-1'>
                                        <h1>N 4,500</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white my-2 panel-shadow px-4 py-3" style={{ height: "560px", overflowY: "scroll" }}>
                            <div className="transation-heading">
                                <h1>Transactions</h1>
                            </div>
                            <div className="transactions">
                                {transactions.map((transaction) => (
                                    <div className="d-flex justify-content-between py-3" key={transaction.id}>
                                        <div className="detail">
                                            <h5>{transaction.title}</h5>
                                            <p>{transaction.date}</p>
                                        </div>
                                        <div className={`amount ${transaction.isNegative ? "text-danger" : ""}`}>
                                            {transaction.isNegative ? "-" : "+"}${Math.abs(transaction.amount)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    export default MyWallet;