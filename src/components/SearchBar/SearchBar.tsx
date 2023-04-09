import React from 'react';
import styles from './SearchBar.module.scss';

export interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, setSearchValue, onSearch }) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const handleClick = () => {
    onSearch();
  };

  return (
    <div className={styles.searchBar}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyUp={handleKeyPress}
        className={styles.searchInput}
        type="search"
        placeholder="Everybody's looking for something"
      />
      <button onClick={handleClick} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
