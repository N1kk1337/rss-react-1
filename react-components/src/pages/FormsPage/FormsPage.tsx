import CatForm from '../../components/CatForm/CatForm';
import MyCatCard from '../../components/CatForm/components/MyCatCard';
import React, { Component } from 'react';
import styles from './FormsPage.module.scss';
import { MyCatModel } from 'components/CatForm/components/MyCatModel';

interface FormsPageState {
  data: MyCatModel[];
}

interface FormPageProps {
  object?: object;
}

export default class FormsPage extends Component<FormPageProps, FormsPageState> {
  constructor(props: FormPageProps | Readonly<FormPageProps>) {
    super(props);
    this.state = { data: [] };
  }
  handleSubmit = (data: MyCatModel) => {
    this.setState({ data: [...this.state.data, data] });
  };
  render() {
    return (
      <div>
        <CatForm onSubmit={this.handleSubmit} />
        {this.state.data &&
          this.state.data.map((cat, index) => (
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
          ))}
      </div>
    );
  }
}
