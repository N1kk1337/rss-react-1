import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';

export interface MainPageProps {}

export interface MainPageState {}

class MainPage extends React.PureComponent<MainPageProps, MainPageState> {
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
