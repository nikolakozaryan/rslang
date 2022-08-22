
import React from 'react';
import { Link } from "react-router-dom";
import classes from './nav.module.scss';

const Navbar: React.FC = () => {
    const navItems: [string, string][] = [['Главная', 'main'],['Учебник', 'book'],['Игры', 'games'],['Статистика', 'statistic']]
    return <nav>
        <ul className={classes.navList}>
            {navItems.map((item) => {
                return <li> <Link to={`${item[1]}`}>{item[0]}</Link></li>;
            })}
        </ul>
    </nav>;

};

export default Navbar;
