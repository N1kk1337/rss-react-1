import Card from '../Card/Card';
import React from 'react';
import styles from './CardList.module.scss';
import data from '../../assets/cats_data.json';
class CardList extends React.Component {
    render() {
        const list = data;
        return (React.createElement("div", { className: styles.list }, list &&
            list.map((n) => (React.createElement(Card, { img: n.url, breed: n.breeds[0].name, wiki: n.breeds[0].wikipedia_url, temperament: n.breeds[0].temperament, sheddingLevel: n.breeds[0].shedding_level, friendly: n.breeds[0].stranger_friendly, key: n.id })))));
    }
}
export default CardList;
