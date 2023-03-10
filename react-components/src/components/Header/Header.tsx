import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss'

export interface HeaderProps {

}

export interface HeaderState {

}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
    // state = { : }


    render() {
        let path = '';
        switch (window.location.pathname) {
            case "/":
                path = 'Main Page';
                break;
            case "/about":
                path = 'About Us';
                break;
            default: path = "Error Page";
        }

        return (
            <header className={styles.header}>
                <div className={styles["current-page"]}>Current Page: {path}</div>
                <nav >
                    <ul className={styles['header__nav']}>
                        <li className={styles['nav__item']}><Link className={styles["nav__btn"]} to={"/"}>Main</Link></li>
                        <li className={styles['nav__item']}><Link className={styles["nav__btn"]} to={"/about"}>About Us</Link></li>
                    </ul>
                </nav>
            </header>

        );
    }
}

export default Header;