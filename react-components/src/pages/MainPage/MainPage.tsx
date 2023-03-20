import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';

class MainPage extends React.Component {
  // state = { : }
  render() {
    return (
      <main>
        <Header />
        <div className={styles['main-page']}>
          <SearchBar></SearchBar>
          <CardList></CardList>
        </div>
      </main>
    );
  }
}

export default MainPage;
