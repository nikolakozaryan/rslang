import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classes from './Welcome.module.scss';
import ApplicationAccessContext from '../../../context/context';
import buttonClasses from '../../../components/Button/Button.module.scss';

const Welcome = (): JSX.Element => {
    const { setApplicationAccess } = useContext(ApplicationAccessContext);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h1 className={classes.header}>
                    Изучай иностранные языки вместе с <span className={classes.logo}>RSLang</span>
                </h1>
                <p className={classes.text}>
                    Электронный учебник с базой слов для изучения, мини-игры для их повторения, статистика для
                    отслеживания прогресса.
                </p>
                <NavLink
                    to="/entrance"
                    className={`${classes.link} ${buttonClasses.button}`}
                    onClick={() => setApplicationAccess('registration')}
                >
                    Зарегистрироваться
                </NavLink>
            </div>
            <div className={classes.image}></div>
        </div>
    );
};

export default Welcome;
