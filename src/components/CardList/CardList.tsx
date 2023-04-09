import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
import axios from 'axios';
import { API_BASE_URL, FLICKR_API_KEY } from '../../config/api';

interface CardListProps {
  searchValue: string;
}

interface Photo {
  id: string;
  server_id: string;
  secret: string;
  title: string;
  ownerName: string;
}

const CardList: React.FC<CardListProps> = (props) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let URL;
        if (props.searchValue === '') {
          URL = `${API_BASE_URL}?method=flickr.interestingness.getList&api_key=${FLICKR_API_KEY}&extras=owner_name&per_page=12&page=1&format=json&nojsoncallback=1`;
        } else
          URL = `${API_BASE_URL}?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&text=${props.searchValue}&extras=owner_name&per_page=12&page=1&format=json&nojsoncallback=1`;
        const response = await axios.get(URL);
        const photos = response.data.photos.photo.map(
          (photo: {
            id: string;
            title: string;
            ownername: string;
            server: string;
            secret: string;
          }) => {
            return {
              id: photo.id,
              title: photo.title,
              ownerName: photo.ownername,
              secret: photo.secret,
              server_id: photo.server,
            };
          }
        );
        setPhotos(photos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhotos();
  }, [props.searchValue]);

  return (
    <div className={styles.list}>
      {photos.length !== 0 ? (
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
