import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styles from './RadioSelector.module.scss';
import { MyCatModel } from 'components/CatForm/components/MyCatModel';

interface RadioSelectorProps {
  options: string[];
  name: string;
  fieldName: Path<MyCatModel>;
  register: UseFormRegister<MyCatModel>;
  className?: string;
}

const RadioSelector = ({
  options,
  name,
  fieldName,
  register,
  className,
}: RadioSelectorProps): React.ReactElement => {
  return (
    <div className={`${styles.radio} ${className ? className : ''}`}>
      <label>{name}</label>
      <div className={styles['radio-container']}>
        {options.map((option, index) => (
          <label key={option}>
            <input
              defaultChecked={index === 0 ? true : false}
              type="radio"
              {...register(fieldName)}
              value={index + 1}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioSelector;
