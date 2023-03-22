import React from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarState {
  searchValue: string;
}

interface SearchBarProps {
  object?: object;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps | Readonly<SearchBarProps>) {
    super(props);

    this.state = {
      searchValue: JSON.parse(localStorage.getItem('searchValue')!) || '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
    localStorage.setItem('searchValue', JSON.stringify(event.target.value));
  };

  render() {
    return (
      <input
        value={this.state.searchValue}
        onChange={this.handleChange}
        className={styles.search}
        type="search"
        placeholder="Everybody's looking for something"
      />
    );
  }
}

export default SearchBar;
