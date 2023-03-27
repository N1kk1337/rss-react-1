import React from 'react';
import styles from './CatForm.module.scss';
import cats from '../../assets/cats_data.json';
import RadioSelector from '../RadioSelector/RadioSelector';
import { MyCatModel } from './components/MyCatModel';

interface State {
  errors: {
    [key: string]: string;
  };
}

interface Props {
  onSubmit: (data: MyCatModel) => void;
}

export default class CatForm extends React.Component<Props, State> {
  private nameInput: React.RefObject<HTMLInputElement>;
  private birthDateInput: React.RefObject<HTMLInputElement>;
  private breedInput: React.RefObject<HTMLSelectElement>;
  private bitesInput: React.RefObject<HTMLInputElement>;
  private descriptionInput: React.RefObject<HTMLTextAreaElement>;
  private friendlinessInput: Map<number, HTMLInputElement>;
  private fluffinessInput: Map<number, HTMLInputElement>;
  private genderInput: Map<number, HTMLInputElement>;
  private imgInput: React.RefObject<HTMLInputElement>;
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.nameInput = React.createRef();
    this.birthDateInput = React.createRef();
    this.breedInput = React.createRef();
    this.bitesInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.friendlinessInput = new Map();
    this.fluffinessInput = new Map();
    this.genderInput = new Map();
    this.imgInput = React.createRef();

    this.state = {
      errors: {},
    };
  }

  breeds = new Set(cats.map((cat) => cat.breeds[0].name));

  getSelectedRadioValue = (radioInputs: Map<number, HTMLInputElement>): number => {
    let selectedValue = 0;
    radioInputs.forEach((input, index) => {
      if (input.checked) selectedValue = index;
    });
    return selectedValue + 1;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.validateForm();
    if (this.validateForm()) {
      const newCat: MyCatModel = {
        name: this.nameInput.current!.value,
        birthDate: this.birthDateInput.current!.value,
        breed: this.breedInput.current!.value,
        bites: this.bitesInput.current!.checked,
        description: this.descriptionInput.current!.value,
        friendliness: this.getSelectedRadioValue(this.friendlinessInput),
        fluffiness: this.getSelectedRadioValue(this.fluffinessInput),
        gender: true,
        img: this.imgInput.current!.files && this.imgInput.current!.files[0],
      };
      this.props.onSubmit(newCat);
    }
  };

  validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!this.nameInput.current?.value || !this.nameInput.current.value.trim()) {
      errors.name = 'Name is required';
    }

    if (
      !this.nameInput.current?.value ||
      this.nameInput.current.value.trim()[0] ===
        this.nameInput.current.value.trim()[0].toLowerCase()
    ) {
      errors.name = 'Name must start with a capital letter';
    }

    if (!this.birthDateInput.current?.value || !this.birthDateInput.current.value.trim()) {
      errors.birthDate = 'Birth Date is required';
    }

    if (!this.breedInput.current?.value || !this.breedInput.current.value.trim()) {
      errors.breed = 'Breed is required';
    }

    if (!this.descriptionInput.current?.value || !this.descriptionInput.current.value.trim()) {
      errors.description = 'Description is required';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h1>Send me your cats!</h1>
        <label htmlFor="name">
          Name <input type="text" name="name" ref={this.nameInput} />
        </label>
        {this.state.errors.name && <p className={styles.error}>{this.state.errors.name}</p>}
        <label htmlFor="birthDate">
          Birth Date
          <input type="date" name="birthDate" ref={this.birthDateInput} />
        </label>
        {this.state.errors.birthDate && (
          <p className={styles.error}>{this.state.errors.birthDate}</p>
        )}
        <label htmlFor="breed">
          Breed{' '}
          <select name="breed" ref={this.breedInput}>
            {this.breeds &&
              Array.from(this.breeds).map((breed: string) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
          </select>
        </label>

        {this.state.errors.breed && <p className={styles.error}>{this.state.errors.breed}</p>}

        <RadioSelector
          name="Fluffiness"
          options={['1', '2', '3', '4', '5']}
          setRef={(index, input) => {
            if (input) this.fluffinessInput.set(index, input);
          }}
        />
        <RadioSelector
          name="Friendliness"
          options={['1', '2', '3', '4', '5']}
          setRef={(index, input) => {
            if (input) this.friendlinessInput.set(index, input);
          }}
        />
        <RadioSelector
          name="gender"
          options={['Male', 'Female']}
          setRef={(index, input) => {
            if (input) this.genderInput.set(index, input);
          }}
        />
        <label htmlFor="bites">
          Does this cat bite? <input type="checkbox" name="bites" ref={this.bitesInput} />
        </label>

        <label htmlFor="file">
          Upload cat pic! <input name="file" type="file" ref={this.imgInput} />
        </label>

        <label htmlFor="description">Description</label>
        <textarea name="description" ref={this.descriptionInput} />
        {this.state.errors.description && (
          <p className={styles.error}>{this.state.errors.description}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    );
  }
}
