import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import ApplicationAccessContext from '../../../context/context';
import classes from './Registration.module.scss';

const Registration = () => {
    const { setApplicationAccess } = useContext(ApplicationAccessContext);

    return (
        <form action="">
            <div className={classes.wrapper}>
                <h3 className={classes.header}>Регистрация</h3>
                <p className={classes.info}>
                    Уже есть учетная запись?&nbsp;
                    <span onClick={() => setApplicationAccess('authorization')} className={classes.registration}>
                        Войти
                    </span>
                </p>

                <label htmlFor="inputRegistrationEmail">
                    <p className={classes.explanation}>Адрес электронной почты</p>
                    <input id="inputRegistrationEmail" type="text" className={classes.input} />
                </label>

                <div className={classes.container}>
                    <label htmlFor="inputRegistrationName" className={classes.label}>
                        <p className={classes.explanation}>Имя</p>
                        <input size={15} id="inputRegistrationName" type="text" className={classes.input} />
                    </label>
                    <label htmlFor="inputRegistrationSurname" className={classes.label}>
                        <p className={classes.explanation}>Фамилия</p>
                        <input size={15} id="inputRegistrationSurname" type="text" className={classes.input} />
                    </label>
                </div>

                <label htmlFor="inputRegistrationPassword" className={classes.label}>
                    <p className={classes.explanation}>Пароль</p>
                    <input id="inputRegistrationPassword" type="password" className={classes.input} />
                </label>

                <p className={classes.explanation}>Дата рождения</p>

                <div className={classes.container}>
                    <label htmlFor="inputRegistrationNumber" className={classes.label}>
                        <p className={classes.date}>Число</p>
                        <input
                            size={8}
                            maxLength={2}
                            id="inputRegistrationNumber"
                            type="text"
                            className={classes.input}
                        />
                    </label>
                    <label htmlFor="inputRegistrationMonth" className={classes.label}>
                        <p className={classes.date}>Месяц</p>
                        <input
                            size={8}
                            maxLength={8}
                            id="inputRegistrationMonth"
                            type="text"
                            className={classes.input}
                        />
                    </label>
                    <label htmlFor="inputRegistrationYear" className={classes.label}>
                        <p className={classes.date}>Год</p>
                        <input
                            size={8}
                            maxLength={4}
                            id="inputRegistrationYear"
                            type="text"
                            className={classes.input}
                        />
                    </label>
                </div>

                <Button style={{ width: '100%', margin: '0 0 4rem' }}>Зарегистрироваться</Button>

                <div className={classes.orContainer}>
                    <div className={classes.line} />
                    <p className={classes.or}>Или</p>
                    <div className={classes.line} />
                </div>

                <p className={classes.linkInfo}>Зарегистрируйтесь с помощью социальных систем</p>
                <div className={classes.linkContainer}>
                    <NavLink to="/" className={classes.link}>
                        <div className={classes.google}></div>
                    </NavLink>
                    <NavLink to="/" className={classes.link}>
                        <div className={classes.apple}></div>
                    </NavLink>
                </div>
            </div>
        </form>
    );
};
export default Registration;
