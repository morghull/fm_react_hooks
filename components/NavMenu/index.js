import React, { useReducer, useEffect, useContext } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import styles from 'NavMenu.module.scss';
import { AppContext } from '../../context';

const NavMenu = () => {
  const {
    state: { isMenuOpen },
    closeMenu,
  } = useContext(AppContext);
  const classNames = cx(styles.container, {
    [styles.open]: isMenuOpen,
  });
  return (
    <nav className={classNames}>
      <CloseIcon className={styles.closeBtn} onClick={closeMenu} />
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
