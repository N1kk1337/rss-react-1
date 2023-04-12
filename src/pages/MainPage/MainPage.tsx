import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';

const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>(
    localStorage.getItem('searchValue') !== null
      ? JSON.parse(localStorage.getItem('searchValue')!)
      : ''
  );
  const [searchQuery, setSearchQuery] = React.useState(searchValue);

  const onSearch = () => {
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    setSearchQuery(searchValue);
  };

  return (
    <div className={styles['main-page']}>
      <SearchBar onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
      <CardList searchValue={searchQuery} />
    </div>
  );
};

export default MainPage;
