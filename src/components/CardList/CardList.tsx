import Card from '../Card/Card';
import React from 'react';
import styles from './CardList.module.scss';
import { useFetchPhotosQuery } from '../../store/services/flickrApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

interface CardListProps {
  searchValue: string;
}

const getErrorMessage = (error: FetchBaseQueryError | SerializedError) => {
  if ('message' in error) {
    return error.message;
  }
  if ('status' in error) {
    return `Error: ${error.status}`;
  }
  return 'Unknown error';
};

const CardList: React.FC<CardListProps> = (props) => {
  const { data: photos, error } = useFetchPhotosQuery(props.searchValue);

  if (error) {
    return <h1>{getErrorMessage(error)}</h1>;
  }

  return (
    <div className={styles.list}>
      {photos ? (
        photos.map((photo) => (
          <Card
            key={photo.id}
            id={photo.id}
            img={`https://live.staticflickr.com/${photo.server_id}/${photo.id}_${photo.secret}.jpg`}
            title={photo.title}
            photographerName={photo.ownerName}
          />
        ))
      ) : (
        <h1>Loading or bad search</h1>
      )}
    </div>
  );
};

export default CardList;
