import React from 'react';
import styles from './ModalCard.module.scss';
import { getPhotoFromId } from '../../config/api';
import { useFetchPhotoInfoQuery } from '../../store/services/flickrApi';

interface ModalCardProps {
  id: string;
  onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface PhotoDetails {
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
  const { data: photoDetails } = useFetchPhotoInfoQuery(id);

  return (
    <div className={`${styles.modal} ${styles.show}`} onClick={onClose}>
      {photoDetails !== undefined ? (
        <div onClick={(e) => e.stopPropagation()} className={styles.modal__content}>
          <div className={styles['modal-header']}>
            <h2>{photoDetails.title._content}</h2>
            <div data-testid="modal-close" className={styles.close} onClick={onClose}>
              &times;
            </div>
          </div>

          <div className={styles['modal-body']}>
            <img
              src={getPhotoFromId(photoDetails.server, photoDetails.id, photoDetails.secret)}
              alt={photoDetails.title._content}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.photographer}>Photographer: {photoDetails.owner.realname}</p>
            <p className={styles.description}>
              Description:{' '}
              <span dangerouslySetInnerHTML={{ __html: photoDetails.description._content }}></span>
            </p>
            <p className={styles.taken}>Taken: {photoDetails.dates.taken}</p>
            <p>ID: {photoDetails.id}</p>
          </div>
        </div>
      ) : (
        <div onClick={(e) => e.stopPropagation()} className={styles.modal__content}>
          <div className={styles['modal-header']}>
            <h2 className={styles.loading}>Loading...</h2>

            <span data-testid="modal-close" className={styles.close} onClick={onClose}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCard;
