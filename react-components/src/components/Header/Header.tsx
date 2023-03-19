import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    // With hooks OR with react router v5 this part would be much more clear, but both are forbidden.
    // So, instead of putting Header in to the App.tsx, I decided to put it in every page separately, to implement
    // location.pathname
    let path = '';
    switch (location.pathname) {
      case '/rss-react-1':
        path = 'Main Page';
        break;
      case 'rss-react-1#/about':
        path = 'About Us';
        break;
      default:
        path = 'Error Page';
    }

    return (
      <header className={styles.header}>
        <div className={styles['current-page']}>Current Page: {path}</div>
        <nav>
          <ul className={styles['header__nav']}>
            <li className={styles['nav__item']}>
              <Link className={styles['nav__btn']} to={'/'}>
                Main
              </Link>
            </li>
            <li className={styles['nav__item']}>
              <Link className={styles['nav__btn']} to={'/about'}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
