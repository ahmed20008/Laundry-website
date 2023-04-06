import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Form } from 'react-bootstrap';

const SortBy = () => {

    return (
        <>
            <Form.Select size="sm" className='ms-3' style={{
                backgroundColor: '#F8F8F8',
                border: 'none',
                fontSize: '12px',
                paddingTop: '0.6rem',
                paddingBottom: '0.6rem',
                fontWeight: '500',
                borderRadius: '10px',
            }}>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
            </Form.Select>
        </>
    );
}
export default SortBy;