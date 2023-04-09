import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';

const MainPage: React.FC = () => {
  return (
    <div className={styles['main-page']}>
      <SearchBar />
      <CardList />
    </div>
  );
};

export default MainPage;
