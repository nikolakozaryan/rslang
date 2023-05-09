import { Link } from 'react-router-dom';
import { FC } from 'react';
import Card from '../Card/Card';
import IAdvantageCard from './IAdvantageCard';
import classes from './AdvantageCard.module.scss';
import useApplicationAccessContext from '../../hooks/useApplicationAccessContext';

const AdvantageCard: FC<IAdvantageCard> = ({ imgURL, title, body, path }) => {
  const { isSignedIn } = useApplicationAccessContext();

  let linkStyle = '';

  if (!isSignedIn && title === 'Статистика') {
    linkStyle = classes.disabled;
  }

  return (
    <Link className={classes.link} to={path}>
      <Card type="team" className={linkStyle}>
        <img className={classes.image} src={imgURL} alt="advantage" />
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.body}>{body}</p>
      </Card>
    </Link>
  );
};

export default AdvantageCard;
