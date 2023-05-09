import { Link } from 'react-router-dom';
import classes from './Welcome.module.scss';
import buttonClasses from '../../../components/Button/Button.module.scss';
import useApplicationAccessContext from '../../../hooks/useApplicationAccessContext';

const Welcome = (): JSX.Element => {
  const { isSignedIn } = useApplicationAccessContext();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.header}>
          Изучай иностранные языки вместе с <span className={classes.logo}>RSLang</span>
        </h1>
        <p className={classes.text}>
          Электронный учебник с базой слов для изучения, мини-игры для их повторения, статистика для отслеживания
          прогресса.
        </p>
        {isSignedIn ? (
          false
        ) : (
          <Link to="/registration" className={`${classes.link} ${buttonClasses.button}`}>
            Зарегистрироваться
          </Link>
        )}
      </div>
      <div className={classes.image}></div>
    </div>
  );
};

export default Welcome;
