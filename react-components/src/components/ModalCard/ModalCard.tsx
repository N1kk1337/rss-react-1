import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ModalCard.module.scss';
import { API_BASE_URL, FLICKR_API_KEY, getPhotoFromId } from '../../config/api';

interface ModalCardProps {
  id: string;
  onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface PhotoDetails {
  id: string;
  server: string;
  secret: string;
  title: {
    _content: string;
  };
  owner: {
    realname: string;
  };
  description: {
    _content: string;
  };
  dates: {
    taken: string;
  };
}

const ModalCard: React.FC<ModalCardProps> = ({ id, onClose }) => {
  const [photoDetails, setPhotoDetails] = useState<PhotoDetails | null>(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}?method=flickr.photos.getInfo&api_key=${FLICKR_API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
        );
        const details = response.data.photo;
        console.log(details);
        setPhotoDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  return (
    <div className={`${styles.modal} ${styles.show}`} onClick={onClose}>
      {photoDetails ? (
        <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
          <img
            src={getPhotoFromId(photoDetails.server, photoDetails.id, photoDetails.secret)}
            alt={photoDetails.title._content}
          />
          <h2>{photoDetails.title._content}</h2>
          <p className={styles.photographer}>Photographer: {photoDetails.owner.realname}</p>
          {photoDetails && (
            <>
              <p className={styles.description}>Description: {photoDetails.description._content}</p>
              <p className={styles.taken}>Taken: {photoDetails.dates.taken}</p>
            </>
          )}
          <p>ID: {photoDetails.id}</p>
        </div>
      ) : (
        <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default ModalCard;
