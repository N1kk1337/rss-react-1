import CatForm from '../../components/CatForm/CatForm';
import MyCatCard from '../../components/CatForm/components/MyCatCard';
import React from 'react';
import styles from './FormsPage.module.scss';
import { MyCatModel } from 'components/CatForm/components/MyCatModel';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addCat } from '../../store/slices/catsSlice';

const FormsPage: React.FC = () => {
  const cats = useSelector((state: RootState) => state.cats.cats);
  const dispatch = useDispatch();

  const handleSubmit = (catData: MyCatModel) => {
    dispatch(addCat(catData));
  };

  return (
    <div className={styles['form-page']}>
      <CatForm onSubmit={handleSubmit} />
      <div className={styles['cat-cards']}>
        {cats.length !== 0 ? (
          cats.map((cat, index) => (
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
