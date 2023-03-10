import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar"
import React from "react";
import styles from './MainPage.module.scss'

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
                <Card></Card>
            </div>
        );
    }
}

export default MainPage;