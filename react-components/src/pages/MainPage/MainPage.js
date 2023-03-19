import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
class MainPage extends React.PureComponent {
    // state = { : }
    render() {
        return (React.createElement("main", null,
            React.createElement(Header, null),
            React.createElement("div", { className: styles['main-page'] },
                React.createElement(SearchBar, null),
                React.createElement(CardList, null))));
    }
}
export default MainPage;
