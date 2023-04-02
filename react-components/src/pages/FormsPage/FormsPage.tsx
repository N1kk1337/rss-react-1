import CatForm from '../../components/CatForm/CatForm';
import MyCatCard from '../../components/CatForm/components/MyCatCard';
import React, { useState } from 'react';
import styles from './FormsPage.module.scss';
import { MyCatModel } from 'components/CatForm/components/MyCatModel';

const FormsPage: React.FC = () => {
  const [data, setData] = useState<MyCatModel[]>([]);

  const handleSubmit = (catData: MyCatModel) => {
    setData([...data, catData]);
  };

  return (
    <div className={styles['form-page']}>
      <CatForm onSubmit={handleSubmit} />
      <div className={styles['cat-cards']}>
        {data.length !== 0 ? (
          data.map((cat, index) => (
            <MyCatCard
              key={index}
              name={cat.name}
              gender={cat.gender}
              breed={cat.breed}
              fluffiness={cat.fluffiness}
              friendliness={cat.friendliness}
              img={cat.img}
              birthDate={cat.birthDate}
              bites={cat.bites}
              description={cat.description}
            />
          ))
        ) : (
          <div className={styles['no-cats']}>
            <h2>No cats yet!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormsPage;
