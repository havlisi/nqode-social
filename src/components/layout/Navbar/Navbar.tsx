import React from 'react';
import nqodeLogo from 'src/assets/images/nqode.svg';
import classes from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className={`${classes['c-navbar']}`}>
      <img className={`${classes['c-navbar__image']}`} src={nqodeLogo} alt='Nqode logo' />
      <div className={`${classes['c-navbar__actions']}`}>
        <Link className={`${classes['c-navbar__link']}`} to='/'>
          Home
        </Link>
        <Link className={`${classes['c-navbar__link']}`} to='/'>
          Profile
        </Link>
        <Link className={`${classes['c-navbar__link']}`} to='/'>
          Sign up
        </Link>
        <Link className={`${classes['c-navbar__link']}`} to='/'>
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
