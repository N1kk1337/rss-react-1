import EmojiCounter from '../../EmojiCounter/EmojiCounter';
import React from 'react';
import { Component } from 'react';
import styles from './MyCatCard.module.scss';
import { MyCatModel } from './MyCatModel';
import { fileToDataURL } from '../../../utils/utils';
import placeholderCat from '../../../assets/placeholder_cat.jpg';

interface MyCatCardState {
  imgSrc?: string;
}

export default class MyCatCard extends Component<MyCatModel, MyCatCardState> {
  constructor(props: MyCatModel) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fileToDataURL(this.props.img)
      .then((dataUrl) => {
        this.setState({ imgSrc: dataUrl });
      })
      .catch(() => {
        this.setState({ imgSrc: placeholderCat });
      });
  }
  render() {
    return (
      <div className={styles['cat-card']}>
        <h2>{this.props.name}</h2>
        {this.state.imgSrc && <img src={this.state.imgSrc} alt={this.props.name} />}
        <p>Breed: {this.props.breed}</p>
        <p>Sex: {this.props.gender ? 'Male' : 'Female'}</p>
        <p>Birthday: {this.props.birthDate}</p>
        <p>
          Fluffiness: <EmojiCounter emoji="🐱" count={this.props.fluffiness} />
        </p>
        <p>
          Friendliness: <EmojiCounter emoji="❤️" count={this.props.friendliness} />
        </p>
        <p>Bites? {this.props.bites ? 'Yes!' : 'No!'}</p>
        <p>Description: {this.props.description}</p>
      </div>
    );
  }
}
