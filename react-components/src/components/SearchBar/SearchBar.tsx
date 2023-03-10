import React from "react"
import styles from './SearchBar.module.scss'

class SearchBar extends React.Component {
    render() {
        return <input className={styles.search} type='search' placeholder="Everybody's searching for something"></input>;
    }
}

export default SearchBar;