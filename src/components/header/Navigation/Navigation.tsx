import React from 'react';
import NavLink from './NavLink/NavLink';
import NAVIGATION_ITEMS from '../../../common/constants/navConst';
import classes from './Navigation.module.scss';

const Navbar: React.FC = () => <nav>
        <ul className={classes.navList}>
            {NAVIGATION_ITEMS.map((item) => 
            <NavLink class = 'navItems' page = {item[0]} path = {item[1]} />
             )}
        </ul>
    </nav>;

export default Navbar;