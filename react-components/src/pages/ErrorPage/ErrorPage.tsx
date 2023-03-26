import Header from '../../components/Header/Header';
import React from 'react';
import errorImg from '../../assets/404.png';
import styles from './ErrorPage.module.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <main>
        <img className={styles['error-image']} src={errorImg} alt="" />
      </main>
    );
  }
}

export default ErrorPage;
