import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SortBy = () => {
    const [Sort, setSort] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 100 }} style={{backgroundColor: '#e3e3e3'}}  size="small">
            <InputLabel
                style={{
                    fontSize: '14px',
                    color: 'rgba(126, 126, 126, 1)',
                }}>
                Sort by
            </InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={Sort}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Paid</MenuItem>
                <MenuItem value={20}>Unpaid</MenuItem>
            </Select>
        </FormControl>
    );
}
export default SortBy;