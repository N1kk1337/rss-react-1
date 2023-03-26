import CatForm from '../../components/CatForm/CatForm';
import MyCatCard from '../../components/CatForm/components/MyCatCard';
import React, { Component } from 'react';
import styles from './FormsPage.module.scss';

interface FormsPageState {
  data: MyCatCard[];
}

interface FormPageProps {
  object?: object;
}

export default class FormsPage extends Component<FormPageProps, FormsPageState> {
  constructor(props: FormPageProps | Readonly<FormPageProps>) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <CatForm />
        {this.state.data &&
          this.state.data.map((cat, index) => (
            <MyCatCard
              key={index}
              name={''}
              gender={''}
              breed={''}
              fluffiness={0}
              friendliness={0}
              img={null}
              birthDate={''}
              bites={false}
              description={''}
            />
          ))}
      </div>
    );
  }
}
