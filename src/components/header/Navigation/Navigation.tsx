import React from 'react';
import { Link } from "react-router-dom";
import classes from './Navigation.module.scss';

const Navbar: React.FC = () => {
    const navItems: [string, string][] = [['Главная', 'main'],['Учебник', 'book'],['Игры', 'games'],['Статистика', 'statistic']]
    return <nav>
        <ul className={classes.navList}>
            {navItems.map((item) => 
                <li className={classes.navItems}> <Link className={classes.navItems} to={`${item[1]}`}>{item[0]} {item[0] === 'Игры' && <img src="../../assets/icons/arrowDown.png" alt="" />}</Link></li>
             )}
        </ul>
    </nav>;

};

export default Navbar;