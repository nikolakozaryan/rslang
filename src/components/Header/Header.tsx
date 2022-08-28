import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import Navbar from './Navigation/Navigation';
import ApplicationAccessContext from '../../context/context';

const Header: React.FC = () => {
    const { setApplicationAccess } = useContext(ApplicationAccessContext);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Logo />
                <Navbar />
                <NavLink
                    to="/entrance"
                    className={classes.buttonAuthor}
                    onClick={() => setApplicationAccess('authorization')}
                >
                    ВОЙТИ
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
