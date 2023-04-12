import EmojiCounter from '../../EmojiCounter/EmojiCounter';
import React, { useState, useEffect } from 'react';
import styles from './MyCatCard.module.scss';
import { MyCatModel } from './MyCatModel';
import { fileToDataURL } from '../../../utils/utils';
import placeholderCat from '../../../assets/placeholder_cat.jpg';

const MyCatCard: React.FC<MyCatModel> = (props) => {
  const [imgSrc, setImgSrc] = useState<string>();

  useEffect(() => {
    fileToDataURL(props.img)
      .then((dataUrl) => {
        setImgSrc(dataUrl);
      })
      .catch(() => {
        setImgSrc(placeholderCat);
      });
  }, [props.img]);

  return (
    <div className={styles['cat-card']}>
      <h2>{props.name}</h2>
      {imgSrc && <img src={imgSrc} alt={props.name} />}
      <div className={styles['info-container']}>
        <p>Breed: {props.breed}</p>
        <p>Sex: {props.gender === '1' ? 'Male' : 'Female'}</p>
        <p>Birthday: {props.birthDate}</p>
        <p>
          Fluffiness: <EmojiCounter emoji="🐱" count={props.fluffiness} />
        </p>
        <p>
          Friendliness: <EmojiCounter emoji="❤️" count={props.friendliness} />
        </p>
        <p>Bites? {props.bites ? 'Yes!' : 'No!'}</p>
        <p>Description: {props.description}</p>
      </div>
    </div>
  );
};

export default MyCatCard;
