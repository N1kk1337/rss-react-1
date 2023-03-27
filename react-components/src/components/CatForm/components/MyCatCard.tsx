import EmojiCounter from '../../EmojiCounter/EmojiCounter';
import React from 'react';
import { Component } from 'react';
import styles from './MyCatCard.module.scss';
import { MyCatModel } from './MyCatModel';

export default class MyCatCard extends Component<MyCatModel> {
  constructor(props: MyCatModel) {
    super(props);
  }
  render() {
    return (
      <div className={styles['cat-card']}>
        <h2>{this.props.name}</h2>
        {/* <img src={this.props.img} alt={this.props.name} /> */}
        <p>{this.props.breed}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.birthDate}</p>
        <EmojiCounter emoji="🐱" count={this.props.fluffiness} />
        <EmojiCounter emoji="🐱" count={this.props.friendliness} />
        <p>{this.props.bites}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
