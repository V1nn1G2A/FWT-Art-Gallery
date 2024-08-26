import React from 'react';

import { useLocation } from 'react-router-dom';
import styles from './authMenuLinks.module.scss';

import { useAppSelector, useAppDispatch } from '../../redux';

import { clearToken } from '../../store/reducers/authSlice';
import Menu from '../../ui-components/Menu/Menu';

interface AuthMenuLinksProps {
  theme?: 'light' | 'dark';
}

const AuthMenuLinks: React.FC<AuthMenuLinksProps> = ({ theme }) => {
  const location = useLocation();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.authMenuLinks}>
      {isAuth ? (
        <Menu
          to="/"
          theme={theme}
          label="Log out"
          onClick={() => dispatch(clearToken())}
        />
      ) : (
        <>
          <Menu
            to="/login"
            state={{ backgroundLocation: location }}
            theme={theme}
            label="Log in"
          />
          <Menu
            to="/signup"
            state={{ backgroundLocation: location }}
            theme={theme}
            label="Sign up"
          />
        </>
      )}
    </div>
  );
};

export default AuthMenuLinks;
