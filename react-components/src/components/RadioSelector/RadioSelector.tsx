import React, { Component } from 'react';
import styles from './RadioSelector.module.scss';

interface RadioSelectorProps {
  options: string[];
  name: string;
  setRef: (index: number, input: HTMLInputElement | null) => void;
  className?: string;
}

export default class RadioSelector extends Component<RadioSelectorProps> {
  render() {
    return (
      <div className={`${styles.radio} ${this.props.className ? this.props.className : ''} `}>
        <label>{this.props.name}</label>
        <div className={styles['radio-container']}>
          {this.props.options.map((option, index) => (
            <label key={option}>
              <input
                defaultChecked={index === 0 ? true : false}
                type="radio"
                ref={(input) => this.props.setRef(index, input)}
                name={this.props.name}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  }
}
