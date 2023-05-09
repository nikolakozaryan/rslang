import React, { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserAPI from '../../../components/API/UsersAPI/UsersAPI';
import Button from '../../../components/Button/Button';
import useApplicationAccessContext from '../../../hooks/useApplicationAccessContext';
import FormInput from '../FormInput/FormInput';
import WarningMessage from '../WarningMessage/WarningMessage';
import classes from './Authorization.module.scss';

const Authorization = () => {
  const [email, setEmail] = useState<string>('');
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('Email не может быть пустым');

  const [password, setPassword] = useState<string>('');
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым');

  const [formValid, setFormValid] = useState(false);

  const [registrationError, setRegistrationError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { setIsSignedIn } = useApplicationAccessContext();

  useEffect(() => {
    if (!emailError && !passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailError, passwordError]);

  const blurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const regExpEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);

        if (!event.target.value) {
          setEmailError('Email не может быть пустым');
        } else if (!regExpEmail.test(String(event.target.value).toLowerCase())) {
          setEmailError('Некорректный Email');
        } else {
          setEmailError('');
        }
        break;

      case 'password':
        setPassword(event.target.value);

        if (!event.target.value) {
          setPasswordError('Пароль не может быть пустым');
        } else if (event.target.value.length < 8) {
          setPasswordError('Введите не менее 8 символов');
        } else {
          setPasswordError('');
        }
        break;
      default:
    }
  };

  const authorizationUser = async () => {
    try {
      setLoading(true);
      const { userId: id, token } = await UserAPI.signInUser({ email, password });

      localStorage.setItem('user', JSON.stringify({ id, token }));

      navigate('/');
      setIsSignedIn(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setRegistrationError(error.message);
      } else {
        setRegistrationError('Неизвестная ошибка');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        authorizationUser();
      }}
    >
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
          onChange={changeHandler}
          onBlur={blurHandler}
          name="email"
          type="email"
          placeholder="Введите Email"
          dirty={emailDirty}
          error={emailError}
        />

        <FormInput
          label="Пароль"
          value={password}
          onChange={changeHandler}
          onBlur={blurHandler}
          name="password"
          type="password"
          placeholder="Введите пароль"
          dirty={passwordDirty}
          error={passwordError}
        />

        <Button type="submit" disabled={!formValid} className={classes.buttonAuthorization} loading={loading}>
          Войти
        </Button>

        <WarningMessage errorCondition={registrationError}>{registrationError}</WarningMessage>
      </div>
    </form>
  );
};

export default Authorization;
