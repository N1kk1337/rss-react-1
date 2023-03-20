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

class Card extends React.Component<CardProps> {
  handleLike = () => {
    alert('Do you like this cat? He likes you too!');
  };

  handleShare = () => {
    navigator.clipboard.writeText(this.props.img);
    alert('URL copied to clipboard :3');
  };

  render() {
    return (
      <div data-testid="card" className={styles.card}>
        <img data-testid={this.props.id} className={styles.card__img} src={this.props.img} alt="" />
        <ul className={styles.card__stats}>
          <li>
            <p>
              Breed: <span>{this.props.breed}</span>
            </p>
          </li>
          <li>
            <p>
              Fluffiness: <EmojiCounter emoji="🐱" count={this.props.sheddingLevel} />
            </p>
          </li>
          <li>
            <p>
              Cuteness: <EmojiCounter emoji="❤️" count={this.props.friendly} />
            </p>
          </li>
          <li>
            <p>Temperament: {this.props.temperament}</p>
          </li>
        </ul>
        <div className={styles.card__footer}>
          <button onClick={this.handleLike}>Like ❤️</button>
          <button onClick={this.handleShare}>Share 🔗</button>
          <a href={this.props.wiki}>Breed Info</a>
        </div>
      </div>
    );
  }
}

export default Card;
