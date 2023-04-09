import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>(
    JSON.parse(localStorage.getItem('searchValue')!) || ''
  );

  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      value={searchValue}
      onChange={handleChange}
      className={styles.search}
      type="search"
      placeholder="Everybody's looking for something"
    />
  );
};

export default SearchBar;
