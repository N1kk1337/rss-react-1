import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBtn.module.scss';

type NavBtnProps = {
  path: string;
  children: ReactNode;
};

interface ClassNameFuncProps {
  isActive: boolean;
}

const classNameFunc = ({ isActive }: ClassNameFuncProps) =>
  isActive ? `${styles['nav__btn']} ${styles['active']}` : styles['nav__btn'];

export default class NavBtn extends Component<NavBtnProps> {
  constructor(props: NavBtnProps) {
    super(props);
  }
  render() {
    return (
      <NavLink className={classNameFunc} to={this.props.path}>
        {this.props.children}
      </NavLink>
    );
  }
}
