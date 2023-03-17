import Header from '../../components/Header/Header';
import React from 'react';
import errorImg from '../../assets/404.png';
import styles from './ErrorPage.module.scss';

export interface ErrorPageProps {}

export interface ErrorPageState {}

class ErrorPage extends React.PureComponent<ErrorPageProps, ErrorPageState> {
  //  state = { : }
  render() {
    return (
      <main>
        <Header />
        <img className={styles['error-image']} src={errorImg} alt="" />
      </main>
    );
  }
}

export default ErrorPage;
