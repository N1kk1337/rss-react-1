import React, { Component } from 'react';
import styles from './RadioSelector.module.scss';

interface RadioSelectorProps {
  options: string[];
  name: string;
}
interface RadioSelectorState {}

export default class RadioSelector extends Component<RadioSelectorProps, RadioSelectorState> {
  render() {
    return (
      <div className={styles.radio}>
        <label>{this.props.name}</label>
        <div className={styles['radio-container']}>
          {this.props.options.map((option, index) => (
            <label key={option}>
              <input defaultChecked={index ? true : false} type="radio" name={this.props.name} />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  }
}
