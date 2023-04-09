import React, { useState } from 'react';
import styles from './Card.module.scss';
import { createPortal } from 'react-dom';
import Modal from '../ModalCard/ModalCard';

export interface CardProps {
  id: string;
  img: string;
  title: string;
  photographerName: string;
}

const Card: React.FC<CardProps> = ({ id, img, title, photographerName }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(true);
    console.log('show');
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(false);
    console.log('hide');
  };

  const cardModal = <Modal id={id} onClose={(e) => handleCloseModal(e)} />;

  return (
    <div data-testid="card" className={styles.card} onClick={(e) => handleClick(e)}>
      <img data-testid={id} className={styles.card__img} src={img} alt={title} />
      <ul className={styles.card__stats}>
        <li>
          <p>
            <span>{title}</span>
          </p>
        </li>
        <li>
          <p>
            <span>By: {photographerName}</span>
          </p>
        </li>
      </ul>
      {showModal && createPortal(cardModal, document.body)}
    </div>
  );
};

export default Card;
