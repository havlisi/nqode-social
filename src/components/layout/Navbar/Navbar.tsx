import React, { useCallback } from 'react';
import nqodeLogo from 'src/assets/images/nqode.svg';
import classes from './Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  UserIcon
} from '@heroicons/react/16/solid';
import { getUsernameFromToken } from 'src/services/AuthService';

const Navbar: React.FC = () => {
  const username = getUsernameFromToken();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate('/login');
  }, [navigate]);

  return (
    <nav className={`${classes['c-navbar']}`}>
      <img className={`${classes['c-navbar__image']}`} src={nqodeLogo} alt='Nqode logo' />
      <div className={`${classes['c-navbar__actions']}`}>
        <Link to='/'>
          <HomeIcon className={`${classes['c-navbar__icon']}`} />
        </Link>
        <Link to={`/profile/${username}`}>
          <UserIcon className={`${classes['c-navbar__icon']}`} />
        </Link>
        {!username ? (
          <Link to='/login'>
            <ArrowLeftEndOnRectangleIcon className={`${classes['c-navbar__icon']}`} />
          </Link>
        ) : (
          <span onClick={handleLogout}>
            <ArrowLeftStartOnRectangleIcon
              className={`${classes['c-navbar__icon']} ${classes['c-navbar__icon--logout']}`}
            />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
