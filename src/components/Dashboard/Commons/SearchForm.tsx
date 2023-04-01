import React, { useState } from 'react';
import { SearchIcon } from '../../../assets';

const SearchForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="col-md-4">
    <div className="input-group">
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
            backgroundColor: '#e3e3e3',
            borderRadius: '10px',
            height: '56px',
          }}
      />
    </div>
  </div>
  );
};

export default SearchForm;
