import SERVER from '../../../common/constants/serverConst';
import NewUserWord from './Word';
import IUserDictionary from './UserDictionaryInterface';

const UserDictionary: IUserDictionary = {
    getUserWordsArray: async (id: string, token: string) => {
        const responce: Response = await fetch(`${SERVER}/users/${id}/words`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const arrayOfWords = await responce.json();
        return arrayOfWords;
    },
    createUserWord: async (object: NewUserWord) => {
        const responce: Response = await fetch(`${SERVER}/users/${object.userId}/words/${object.wordId}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${object.token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object.word),
        });

        const car = await responce.json();

        return car;
    },
    deleteUserWord: async (object: NewUserWord) =>
        fetch(`${SERVER}/users/${object.userId}/words/${object.wordId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${object.token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }),
    updateUserWord: async (object: NewUserWord) => {
        const responce: Response = await fetch(`${SERVER}/users/${object.userId}/words/${object.wordId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${object.token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object.word),
        });

        const car = await responce.json();

        return car;
    },
    getUserWordByID: async (object: NewUserWord) => {
        const responce: Response = await fetch(`${SERVER}/users/${object.userId}/words/${object.wordId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${object.token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const word = await responce.json();
        return word;
    },
};

export default UserDictionary;
