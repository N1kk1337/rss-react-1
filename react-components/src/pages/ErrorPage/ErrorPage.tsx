import React from 'react';
import errorImg from '../../assets/404.png';
import styles from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => {
  return (
    <>
      <h1 className={styles['error__header']}>Error!</h1>
      <img className={styles['error__image']} src={errorImg} alt="Error Page" />
      <button className={styles['error__return-btn']}>Return to Main Page</button>
    </>
  );
};

export default ErrorPage;
