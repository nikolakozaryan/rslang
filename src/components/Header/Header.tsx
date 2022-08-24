import React from 'react';
import classes from "./Header.module.scss";
import Logo from './Logo/Logo';
import Navbar from './Navigation/Navigation';

const Header: React.FC = () => (
        <header className = {classes.header} >
            <div className = {classes.container}>
                <Logo />
                <Navbar/>
                <a className= {classes.buttonAuthor} href="##">ВОЙТИ</a>
            </div>
        </header>
    )

export default Header;