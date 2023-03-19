import Header from '../../components/Header/Header';
import React from 'react';
import errorImg from '../../assets/404.png';
import styles from './ErrorPage.module.scss';
class ErrorPage extends React.PureComponent {
    //  state = { : }
    render() {
        return (React.createElement("main", null,
            React.createElement(Header, null),
            React.createElement("img", { className: styles['error-image'], src: errorImg, alt: "" })));
    }
}
export default ErrorPage;
