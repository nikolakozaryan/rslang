import React, { ChangeEventHandler, FocusEventHandler, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import ApplicationAccessContext from '../../../context/context';
import classes from './Authorization.module.scss';

const Authorization = () => {
    const { setApplicationAccess } = useContext(ApplicationAccessContext);
    const [email, setEmail] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('Email не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (!emailError) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [emailError]);

    const blurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
        if (event.target.name === 'email') {
            setEmailDirty(true);
        }
    };

    const emailHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);

        const regExpEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regExpEmail.test(String(event.target.value).toLowerCase())) {
            setEmailError('Некорректный Email');
        } else {
            setEmailError('');
        }
    };

    return (
        <form action="">
            <div className={classes.wrapper}>
                <h3 className={classes.header}>Войти</h3>
                <p className={classes.info}>
                    Новый пользователь?&nbsp;
                    <span onClick={() => setApplicationAccess('registration')} className={classes.registration}>
                        Зарегистрироваться
                    </span>
                </p>

                <label htmlFor="inputAuthorizationEmail">
                    <p className={classes.email}>Адрес электронной почты</p>
                    <input
                        value={email}
                        onChange={emailHandler}
                        onBlur={blurHandler}
                        id="inputAuthorizationEmail"
                        name="email"
                        type="text"
                        className={classes.input}
                        placeholder="Введите Email"
                    />
                    {emailDirty && emailError ? (
                        <p className={classes.error}>{emailError}</p>
                    ) : (
                        <p className={classes.transparent}>Email</p>
                    )}
                </label>
                <Button disabled={!formValid} style={{ width: '100%', margin: '2rem 0 4.5rem' }}>
                    Войти
                </Button>

                <div className={classes.orContainer}>
                    <div className={classes.line} />
                    <p className={classes.or}>Или</p>
                    <div className={classes.line} />
                </div>
                <NavLink to="/" className={classes.link}>
                    <div className={classes.google}></div>
                    <p className={classes.continue}>Продолжить с Google</p>
                </NavLink>
                <NavLink to="/" className={classes.link}>
                    <div className={classes.apple}></div>
                    <p className={classes.continue}>Продолжить с Apple</p>
                </NavLink>
            </div>
        </form>
    );
};

export default Authorization;
