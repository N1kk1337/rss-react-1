import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './CatForm.module.scss';
import cats from '../../assets/cats_data.json';
import RadioSelector from '../RadioSelector/RadioSelector';
import { MyCatModel } from './components/MyCatModel';

interface CatFormProps {
  onSubmit: (data: MyCatModel) => void;
}

const CatForm: React.FC<CatFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MyCatModel>({
    mode: 'onSubmit',
  });
  const [img, setImg] = useState('');

  const [dataSavedMessage, setDataSavedMessage] = useState(false);
  const breeds = new Set(cats.map((cat) => cat.breeds[0].name));

  const validateName = (value: string) => {
    if (!value || value.trim() === '') {
      return 'Name is required';
    } else if (value && value.trim() && value.trim()[0] !== value.trim()[0].toUpperCase()) {
      return 'Name must start with a capital letter';
    } else {
      return true;
    }
  };

  const onFormSubmit: SubmitHandler<MyCatModel> = async (data) => {
    const dataWithImg = {
      ...data,
      img,
    };
    await onSubmit(dataWithImg);
    setDataSavedMessage(true);
    reset();
  };

  const onError = () => {
    setDataSavedMessage(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      data-testid="cat-form"
      onSubmit={handleSubmit(onFormSubmit, onError)}
      className={styles.form}
    >
      <h1 className={styles.header}>Send me your cats!</h1>
      <label className={styles['form__single-field-input']} htmlFor="name">
        Name:{' '}
        <input
          {...register('name', {
            validate: validateName,
          })}
          type="text"
          id="name"
          onBlur={(e) => validateName(e.target.value)}
        />
      </label>
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <label className={styles['form__single-field-input']} htmlFor="birthDate">
        Birth Date:
        <input
          {...register('birthDate', { required: 'Birth Date is required' })}
          type="date"
          id="birthDate"
        />
      </label>
      {errors.birthDate && <p className={styles.error}>{errors.birthDate.message}</p>}
      <label className={styles['form__single-field-input']} htmlFor="breed">
        Breed{' '}
        <select {...register('breed', { required: 'Breed is required' })} id="breed">
          {breeds &&
            Array.from(breeds).map((breed: string) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
        </select>
      </label>
      {errors.breed && <p className={styles.error}>{errors.breed.message}</p>}

      <RadioSelector
        className={styles['form__multi-field-input']}
        name="Fluffiness"
        options={['1', '2', '3', '4', '5']}
        register={register}
        fieldName="fluffiness"
      />
      <RadioSelector
        className={styles['form__multi-field-input']}
        name="Friendliness"
        options={['1', '2', '3', '4', '5']}
        register={register}
        fieldName="friendliness"
      />
      <RadioSelector
        className={styles['form__multi-field-input']}
        name="Sex"
        options={['Male', 'Female']}
        register={register}
        fieldName="gender"
      />
      <label className={styles['form__checkbox']} htmlFor="bites">
        Does this cat bite? <input {...register('bites')} type="checkbox" name="bites" />
      </label>

      <label className={styles['form__upload']} htmlFor="img">
        Upload cat pic!{' '}
        <input type="file" {...register('img')} onChange={handleFileChange} id="img" />
      </label>

      <label className={styles['form__description']} htmlFor="description">
        Description{' '}
        <textarea
          {...register('description', { required: 'Description is required' })}
          id="description"
        />
      </label>

      {errors.description && <p className={styles.error}>{errors.description.message}</p>}

      <button type="submit">Submit</button>

      {dataSavedMessage && <p className={styles['success']}>I got your cat!</p>}
    </form>
  );
};

export default CatForm;
