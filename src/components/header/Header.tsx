import React from 'react';
import classes from "./Header.module.scss"
import Navbar from './Navigation/Navigation';

const Header: React.FC = () => (
        <header className = {classes.header} >
            <div className = {classes.container}>
                <div className={classes.logo}>
                    <img src="../../assets/icons/logo.png" alt="logo" />
                    <h5>RSLang</h5>
                </div>
                <Navbar/>
                <a className= {classes.buttonAuthor} href="##">ВОЙТИ</a>
            </div>
        </header>
    )

export default Header;