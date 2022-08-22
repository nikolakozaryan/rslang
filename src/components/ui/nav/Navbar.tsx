
import React from 'react';
import { Link } from "react-router-dom";
import classes from './nav.module.scss';

const Navbar: React.FC = () => {
    const navItems: [string, string][] = [['Главная', 'main'],['Учебник', 'book'],['Игры', 'games'],['Статистика', 'statistic']]
    return <nav>
        <ul className={classes.navList}>
            {navItems.map((item) => {
                return item[0] === 'Игры'?
                <li className={classes.navItems}> <Link className={classes.navItems} to={`${item[1]}`}>{item[0]} <img src="../../assets/icons/arrowDown.png" alt="" /></Link></li>:
                <li className={classes.navItems}> <Link className={classes.navItems} to={`${item[1]}`}>{item[0]}</Link></li>
            })}
        </ul>
    </nav>;

};

export default Navbar;
