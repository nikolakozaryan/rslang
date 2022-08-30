import React, { PropsWithChildren, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import Navbar from './Navigation/Navigation';

const Header: React.FC<{ navigationHide?: boolean }> = ({ navigationHide }) => (
    <header className={classes.header}>
        <div className={classes.container}>
            <Logo />
            {!navigationHide ? (
                <>
                    <Navbar />
                    <NavLink to="/authorization" className={classes.buttonAuthor}>
                        ВОЙТИ
                    </NavLink>
                </>
            ) : null}
        </div>
    </header>
);

export default Header;
