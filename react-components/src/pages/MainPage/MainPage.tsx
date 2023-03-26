import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';

class MainPage extends React.Component {
  render() {
    return (
      <main>
        <div className={styles['main-page']}>
          <SearchBar />
          <CardList />
        </div>
      </main>
    );
  }
}

export default MainPage;
