import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar"
import React from "react";
import styles from './MainPage.module.scss'
import CardList from "../../components/CardList/CardList";

export interface MainPageProps {

}

export interface MainPageState {

}

class MainPage extends React.PureComponent<MainPageProps, MainPageState> {
    // state = { : }
    render() {
        return (
            <div className={styles['main-page']}>
                <SearchBar></SearchBar>
                <CardList></CardList>
            </div>
        );
    }
}

export default MainPage;