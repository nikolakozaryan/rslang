import { FC } from 'react';
import { Link } from 'react-router-dom';
import useApplicationAccessContext from '../../hooks/useApplicationAccessContext';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import Navbar from './Navigation/Navigation';

const Header: FC<{ navigationHide?: boolean }> = ({ navigationHide }) => {
  const { isSignedIn, setIsSignedIn } = useApplicationAccessContext();

  const clickHandler = () => {
    setIsSignedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        {!navigationHide ? (
          <>
            <Navbar />
            {isSignedIn ? (
              <button onClick={clickHandler} className={classes.buttonAuthor}>
                ВЫЙТИ
              </button>
            ) : (
              <Link to="/authorization" className={classes.buttonAuthor}>
                ВОЙТИ
              </Link>
            )}
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
