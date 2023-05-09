import { FC } from 'react';
import { Link } from 'react-router-dom';
import useApplicationAccessContext from '../../../../hooks/useApplicationAccessContext';
import LinkProps from './NavLinkInterface';
import classes from './NavLink.module.scss';

const NavLink: FC<LinkProps> = (prop: LinkProps) => {
  const { isSignedIn } = useApplicationAccessContext();

  let linkStyle = classes.link;

  if (!isSignedIn && prop.page === 'Статистика') {
    linkStyle = `${linkStyle} ${classes.disabled}`;
  }

  return (
    <li className={classes.item}>
      <Link className={linkStyle} to={`${prop.path}`}>
        {prop.page}
      </Link>
    </li>
  );
};

export default NavLink;
