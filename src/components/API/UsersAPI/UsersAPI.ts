import SERVER from '../../../common/constants/serverConst';
import IUser, { CreateUserPayload, SignInUserPayload, UpdateUserPayload } from './UserInterface';

const UserAPI: IUser = {
  deleteUser: async (id: string, token: string) => {
    const rawResponse = await fetch(`${SERVER}/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const content = await rawResponse.json();

    return content;
  },

  updateUser: async (id: string, token: string, user: UpdateUserPayload) => {
    const rawResponse = await fetch(`${SERVER}/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    const content = await rawResponse.json();

    return content;
  },

  createUser: async (user: CreateUserPayload) => {
    const rawResponse = await fetch(`${SERVER}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (rawResponse.ok) {
      return rawResponse.json();
    }
    if (rawResponse.status === 417) {
      throw new Error('Такой пользователь существует!');
    }

    throw new Error('Не удалось создать пользователя!');
  },

  getUser: async (id: string, token: string) => {
    const rawResponse = await fetch(`${SERVER}/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const content = await rawResponse.json();

    return content;
  },

  getNewUserToken: async (id: string, token: string) => {
    const rawResponse = await fetch(`${SERVER}/users/${id}/tokens`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const content = await rawResponse.json();

    return content;
  },

  signInUser: async (user: SignInUserPayload) => {
    const rawResponse = await fetch(`${SERVER}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (rawResponse.ok) {
      return rawResponse.json();
    }
    if (rawResponse.status === 403) {
      throw new Error('Неверный пароль!');
    }

    if (rawResponse.status === 404) {
      throw new Error('Не удалось найти пользователя!');
    }

    throw new Error('Не удалось войти!');
  },
};

export default UserAPI;
