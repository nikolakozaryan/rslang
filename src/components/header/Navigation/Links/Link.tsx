import React from 'react';
import { Link } from "react-router-dom";
import LinkProps from './interfase';

const NavLink: React.FC<LinkProps> = (prop: LinkProps) => {
console.log(prop);
 return <>
        <li className={prop.class}> <Link className={prop.class} to={`${prop.path}`}>{prop.page} 
        {prop.page === 'Игры' && <img src="../../assets/icons/arrowDown.svg" alt="" />}</Link></li>
    </>}

export default NavLink;