import { FC } from 'react';
import NavLink from './NavLink/NavLink';
import NAVIGATION_ITEMS from '../../../common/constants/navConst';
import classes from './Navigation.module.scss';

const Navbar: FC = () => (
  <nav>
    <ul className={classes.navList}>
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink page={item[0]} path={item[1]} key={item[0]} />
      ))}
    </ul>
  </nav>
);

export default Navbar;
