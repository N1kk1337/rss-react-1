import React from "react"
import styles from './SearchBar.module.scss'

interface SearchBarState {
    searchValue: string;
}

class SearchBar extends React.Component<{}, SearchBarState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            searchValue: JSON.parse(localStorage.getItem("searchValue")!) || '',
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchValue: event.target.value });
        localStorage.setItem("searchValue", JSON.stringify(event.target.value));
    };


    render() {
        return <input
            value={this.state.searchValue}
            onChange={this.handleChange}
            className={styles.search}
            type='search'
            placeholder="Everybody's searching for something" />;
    }
}

export default SearchBar;