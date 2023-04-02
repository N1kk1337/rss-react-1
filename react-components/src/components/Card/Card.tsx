import EmojiCounter from '../EmojiCounter/EmojiCounter';
import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  id: string;
  img: string;
  breed: string;
  wiki: string;
  sheddingLevel: number;
  friendly: number;
  temperament: string;
}

const Card: React.FC<CardProps> = ({
  id,
  img,
  breed,
  wiki,
  sheddingLevel,
  friendly,
  temperament,
}) => {
  const handleLike = () => {
    alert('Do you like this cat? He likes you too!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(img);
    alert('URL copied to clipboard :3');
  };

  return (
    <div data-testid="card" className={styles.card}>
      <img data-testid={id} className={styles.card__img} src={img} alt="" />
      <ul className={styles.card__stats}>
        <li>
          <p>
            Breed: <span>{breed}</span>
          </p>
        </li>
        <li>
          <p>
            Fluffiness: <EmojiCounter emoji="🐱" count={sheddingLevel} />
          </p>
        </li>
        <li>
          <p>
            Cuteness: <EmojiCounter emoji="❤️" count={friendly} />
          </p>
        </li>
        <li>
          <p>Temperament: {temperament}</p>
        </li>
      </ul>
      <div className={styles.card__footer}>
        <button onClick={handleLike}>Like ❤️</button>
        <button onClick={handleShare}>Share 🔗</button>
        <a href={wiki}>Breed Info</a>
      </div>
    </div>
  );
};

export default Card;
