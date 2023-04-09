import React, { ReactNode } from 'react';
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

const NavBtn: React.FC<NavBtnProps> = ({ path, children }) => {
  return (
    <NavLink className={classNameFunc} to={path}>
      {children}
    </NavLink>
  );
};

export default NavBtn;
