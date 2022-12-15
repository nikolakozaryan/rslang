import React, { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FormInput from '../FormInput/FormInput';
import classes from './Registration.module.scss';
import UserAPI from '../../../components/API/UsersAPI/UsersAPI';
import WarningMessage from '../WarningMessage/WarningMessage';
import useApplicationAccessContext from '../../../hooks/useApplicationAccessContext';

const Registration = () => {
  const [email, setEmail] = useState<string>('');
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('Email не может быть пустым');

  const [name, setName] = useState<string>('');
  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>('Имя не может быть пустым');

  const [password, setPassword] = useState<string>('');
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым');

  const [formValid, setFormValid] = useState(false);

  const [registrationError, setRegistrationError] = useState<string>('');

  const { setIsSignedIn } = useApplicationAccessContext();

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!emailError && !nameError && !passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailError, nameError, passwordError]);

  const blurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'name':
        setNameDirty(true);
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
      case 'name':
        setName(event.target.value);

        if (!event.target.value) {
          setNameError('Имя не может быть пустым');
        } else {
          setNameError('');
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

  const registerUser = async () => {
    try {
      setLoading(true);
      const { id } = await UserAPI.createUser({ name, email, password });
      const { token } = await UserAPI.signInUser({ email, password });

      localStorage.setItem('user', JSON.stringify({ id, token }));

      navigate('/');

      setIsSignedIn(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setRegistrationError(error.message);
      } else {
        setRegistrationError('Неизвестная ошибка');
        console.log(error);
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
        registerUser();
      }}
    >
      <div className={classes.wrapper}>
        <h3 className={classes.header}>Регистрация</h3>
        <p className={classes.info}>
          Уже есть учетная запись?&nbsp;
          <Link to="/authorization" className={classes.authorization}>
            Войти
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
          label="Имя"
          value={name}
          onChange={changeHandler}
          onBlur={blurHandler}
          name="name"
          type="text"
          placeholder="Введите имя"
          dirty={nameDirty}
          error={nameError}
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

        <Button type="submit" disabled={!formValid} className={classes.buttonRegistration} loading={loading}>
          Зарегистрироваться
        </Button>

        <WarningMessage errorCondition={registrationError}>{registrationError}</WarningMessage>
      </div>
    </form>
  );
};
export default Registration;
