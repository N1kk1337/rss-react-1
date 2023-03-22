import Card from '../Card/Card';
import React from 'react';
import styles from './CardList.module.scss';
import data from '../../assets/cats_data.json';

class CardList extends React.Component {
  render() {
    const list = data;

    return (
      <div className={styles.list}>
        {list &&
          list.map((cat) => (
            <Card
              img={cat.url}
              breed={cat.breeds[0].name}
              wiki={cat.breeds[0].wikipedia_url}
              temperament={cat.breeds[0].temperament}
              sheddingLevel={cat.breeds[0].shedding_level}
              friendly={cat.breeds[0].stranger_friendly}
              id={cat.id}
              key={cat.id}
            />
          ))}
      </div>
    );
  }
}

export default CardList;
