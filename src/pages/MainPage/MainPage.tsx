import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import styles from './MainPage.module.scss';
import CardList from '../../components/CardList/CardList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setSearchValue as setSearchValueAction } from '../../store/slices/searchSlice';

const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const [searchQuery, setSearchQuery] = React.useState(searchValue);

  const onSearch = () => {
    setSearchQuery(searchValue);
  };

  const setSearchValue = (value: string) => {
    dispatch(setSearchValueAction(value));
  };

  return (
    <div className={styles['main-page']}>
      <SearchBar onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
      <CardList searchValue={searchQuery} />
    </div>
  );
};

export default MainPage;
