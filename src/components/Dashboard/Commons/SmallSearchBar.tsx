import React, { useState } from 'react'
import { SearchIcon } from '../../../assets';

const SmallSearchBar: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="input-group d-flex align-items-center">
            <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                style={{
                    backgroundImage: `url(${SearchIcon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px center',
                    paddingLeft: '43px',
                    backgroundColor: '#F8F8F8',
                    borderRadius: '10px',
                    height: '38px',
                    border: 'none',
                }}
            />

        </div>
    )
}

export default SmallSearchBar