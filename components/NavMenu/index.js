import React, { useReducer, useEffect } from 'react';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import styles from 'NavMenu.module.scss';

const NavMenu = () => {
  const classNames = cx(styles.container);
  return (
    <nav className={classNames}>
      <CloseIcon className={styles.closeBtn} />
      <ul className={styles.list}>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">sign up</NavLink>
        </li>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
