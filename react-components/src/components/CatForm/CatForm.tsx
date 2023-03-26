import React from 'react';
import styles from './CatForm.module.scss';
import cats from '../../assets/cats_data.json';
import RadioSelector from '../RadioSelector/RadioSelector';

interface State {
  name: string;
  birthDate: string;
  breed: string;
  bites: boolean;
  description: string;
  friendliness: number;
  fluffiness: number;
  gender: string;
  img: File | null;
  errors: {
    [key: string]: string;
  };
}

interface Props {
  object?: object;
}

export default class CatForm extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      breed: '',
      fluffiness: 1,
      friendliness: 1,
      img: null,
      birthDate: '',
      bites: false,
      description: '',
      errors: {},
    };
  }

  breeds = new Set(cats.map((cat) => cat.breeds[0].name));

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate form inputs and create a new card if the form is valid
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    // this.setState((prevState) => ({
    //   ...prevState,
    //   [name]: type === 'checkbox' ? checked : value,
    // }));
  };

  validateForm = () => {
    const { name, birthDate, breed, gender } = this.state;
    const errors: { [key: string]: string } = {};

    // Validate form fields here
    // Add error messages to the 'errors' object

    this.setState({ errors });

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  render() {
    const {
      name,
      birthDate,
      breed,
      fluffiness,
      friendliness,
      bites,
      description,
      gender,
      img,
      errors,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={this.handleInputChange} />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <label htmlFor="birthDate">Birth Date</label>
        <input type="date" name="birthDate" value={birthDate} onChange={this.handleInputChange} />
        {errors.birthDate && <p className={styles.error}>{errors.birthDate}</p>}

        <label htmlFor="breed">Breed</label>
        <select name="breed" value={breed} onChange={this.handleInputChange}>
          {this.breeds &&
            Array.from(this.breeds).map((breed: string) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
        </select>
        {errors.breed && <p className={styles.error}>{errors.breed}</p>}

        <label htmlFor="fluffiness">Fluffiness</label>
        <input
          id="fluf-1"
          type="radio"
          name="fluffiness"
          value={fluffiness}
          onChange={this.handleInputChange}
        />
        <RadioSelector name="Fluffiness" options={['1', '2', '3', '4', '5']} />
        <RadioSelector name="Friendliness" options={['1', '2', '3', '4', '5']} />
        <label htmlFor="bites">Bites</label>
        <input type="checkbox" name="bites" checked={bites} onChange={this.handleInputChange} />
        <label htmlFor="description">Description</label>
        <textarea name="description" value={description} onChange={this.handleInputChange} />
        {errors.description && <p className={styles.error}>{errors.description}</p>}

        <button type="submit">Submit</button>
      </form>
    );
  }
}
