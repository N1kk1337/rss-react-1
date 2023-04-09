import NavBtn from '../../components/NavBtn/NavBtn';
import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles['header__nav']}>
          <li className={styles['nav__item']}>
            <NavBtn path={'/'}>Main</NavBtn>
          </li>
          <li className={styles['nav__item']}>
            <NavBtn path={'/forms'}>Forms</NavBtn>
          </li>
          <li className={styles['nav__item']}>
            <NavBtn path={'/about'}>About Us</NavBtn>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
