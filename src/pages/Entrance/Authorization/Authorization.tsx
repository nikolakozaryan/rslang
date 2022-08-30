import React, { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FormInput from '../FormInput/FormInput';
import classes from './Authorization.module.scss';

const Authorization = () => {
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

        if (!event.target.value) {
            setEmailError('Email не может быть пустым');
        } else if (!regExpEmail.test(String(event.target.value).toLowerCase())) {
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
                    <Link to="/registration" className={classes.registration}>
                        Зарегистрироваться
                    </Link>
                </p>

                <FormInput
                    label="Адрес электронной почты"
                    value={email}
                    onChange={emailHandler}
                    onBlur={blurHandler}
                    name="email"
                    type="email"
                    placeholder="Введите Email"
                    dirty={emailDirty}
                    error={emailError}
                />

                <Button type="submit" disabled={!formValid} className={classes.buttonAuthorization}>
                    Войти
                </Button>
            </div>
        </form>
    );
};

export default Authorization;
