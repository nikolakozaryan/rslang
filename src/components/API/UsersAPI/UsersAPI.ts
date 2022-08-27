import SERVER from '../../../common/constants/serverConst';
import User from './User';
import IUser from './UserInterface';

const UserAPI: IUser = {
    createUserObject: (name: string, email: string, password: string) => ({
        name,
        email,
        password,
    }),
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
    updateUser: async (id: string, token: string, user: User) => {
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
    createUser: async (user: User) => {
        const rawResponse = await fetch(`${SERVER}/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const content = await rawResponse.json();

        return content;
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
    signInUser: async (user: User) => {
        const rawResponse = await fetch(`${SERVER}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;
    },
};

export default UserAPI;
