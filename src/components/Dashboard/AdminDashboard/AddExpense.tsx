import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from '@mui/material/Button';
import './AddExpense.css';
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


interface Expense {
    id: number;
    date: string;
    category: string;
    amount: string;
    description: string;
    remark: string;
}

const AddExpense: React.FC = () => {


    const [expenses, setExpenses] = useState<Expense[]>([]);

    // Define state to hold the currently selected expense for editing
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

    // Define functions to handle adding, editing, and deleting expenses
    const addExpense = (expense: Expense) => {
        setExpenses([...expenses, expense]);
    };

    const editExpense = (expense: Expense) => {
        setExpenses(expenses.map((e) => (e.id === expense.id ? expense : e)));
        setSelectedExpense(null);
    };

    const deleteExpense = (id: number) => {
        if (window.confirm('Are you sure you want to delete this expense?')) {
            setExpenses(expenses.filter((e) => e.id !== id));
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const expense: Expense = {
            id: Date.now(),
            date: form.date.value,
            category: form.category.value,
            amount: form.amount.value,
            description: form.description.value,
            remark: form.remark.value,
        };
        if (selectedExpense) {
            editExpense({ ...selectedExpense, ...expense });
        } else {
            addExpense(expense);
        }
        form.reset();
    };

    return (
        <>
            <div className="bg-white panel-shadow px-5 py-4 mt-md-1" style={{
                height: '760px',
                overflowY: 'scroll'
            }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="expense-form">
                            <h1 className='pt-2 pb-4'>Operating Expenses</h1>
                            <Form onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-md-4 px-1">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="date" id="date" name="date" defaultValue={selectedExpense?.date} required />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 px-1">
                                        <Form.Select className='mb-3' id='category' name='category' defaultValue={selectedExpense?.category} required>
                                            <option>Select Category</option>
                                            <option value="Maintenance">Maintenance</option>
                                            <option value="Supplies">Supplies</option>
                                            <option value="Utility">Utility</option>
                                            <option value="Refund">Refund</option>
                                            <option value="Others">Others</option>
                                        </Form.Select>
                                    </div>
                                    <div className="col-md-4 px-1">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder='Amount' id='amount' name='amount' defaultValue={selectedExpense?.amount} required />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 px-1">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder='Enter Description' id='description' name='description' defaultValue={selectedExpense?.description} required />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 px-1">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder='Remarks' id='remark' name='remark' defaultValue={selectedExpense?.remark} required />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 px-1">
                                        <Button type='submit' className='w-100 text-capitalize' variant='contained'
                                            style={{ backgroundColor: '#35A7FF', fontWeight: '600' }}
                                        >
                                            {selectedExpense ? 'Update' : 'Add Expense'}
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="expense-table pt-4">
                            {expenses.length === 0 && (
                                <div className="alert alert-info">
                                    There are no expenses yet. Click "Add Expense" to add a new expense.
                                </div>
                            )}
                            {expenses.length > 0 && (
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Category</th>
                                            <th>Amount</th>
                                            <th>Description</th>
                                            <th>Remark</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {expenses.map((expense, index) => (
                                            <tr key={expense.id}>
                                                <td>{expense.date}</td>
                                                <td>{expense.category}</td>
                                                <td>{expense.amount}</td>
                                                <td>{expense.description}</td>
                                                <td>{expense.remark}</td>
                                                <td>
                                                    <button
                                                        className="border-0 bg-transparent"
                                                        onClick={() => setSelectedExpense(expense)}
                                                    >
                                                        <EditIcon />
                                                    </button>
                                                    <button
                                                        className="border-0 bg-transparent"
                                                        onClick={() => deleteExpense(expense.id)}
                                                    >
                                                        <DeleteOutlineIcon />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddExpense;