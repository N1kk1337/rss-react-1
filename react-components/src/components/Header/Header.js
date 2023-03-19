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
            case '#/':
                path = 'Main Page';
                break;
            case '#/about':
                path = 'About Us';
                break;
            default:
                path = 'Error Page';
        }
        return (React.createElement("header", { className: styles.header },
            React.createElement("div", { className: styles['current-page'] },
                "Current Page: ",
                path),
            React.createElement("nav", null,
                React.createElement("ul", { className: styles['header__nav'] },
                    React.createElement("li", { className: styles['nav__item'] },
                        React.createElement(Link, { className: styles['nav__btn'], to: '/' }, "Main")),
                    React.createElement("li", { className: styles['nav__item'] },
                        React.createElement(Link, { className: styles['nav__btn'], to: '/about' }, "About Us"))))));
    }
}
export default Header;
