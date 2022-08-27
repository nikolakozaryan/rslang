import NewWord from './type';
import IUserDictionary from './UserDictionaryType';
import IWord from './IWord';
import Statistic from './statistic';
import Settings from './settings';

const UserDictionary = {
    // createUser: async (id: string, email: string, password: string) => {
    //     const user = {
    //         id,
    //         email,
    //         password,
    //     };
    //     const rawResponse = await fetch('https://rslang-example.herokuapp.com/users', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user),
    //     });
    //     const content = await rawResponse.json();

    //     console.log(content);

    //     return content;
    // },
    updateUserSettings: async (object: Settings) => {
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${object.userId}/settings`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${object.token}`,
            },
            body: JSON.stringify(object.body),
        });
        console.log(object);
        const content = await rawResponse.json();
        console.log(content, 'cont');
        return content;
    },
    getSettings: async (id: string, token: string) => {
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${id}/settings`, {
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
    updateUserStatistic: async (object: Statistic) => {
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${object.userId}/statistics`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${object.token}`,
            },
            body: JSON.stringify(object.body),
        });
        console.log(object);
        const content = await rawResponse.json();
        console.log(content, 'cont');
        return content;
    },
    getStatistic: async (id: string, token: string) => {
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${id}/statistics`, {
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
    getAllAggregatedUserWords: async (
        id: string,
        token: string,
        group?: string,
        page?: string,
        wordsPerPage?: string,
        sort?: string
    ) => {
        const link = group
            ? `https://rslang-example.herokuapp.com/users/${id}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=${wordsPerPage}`
            : `https://rslang-example.herokuapp.com/users/${id}/aggregatedWords?page=${page}&wordsPerPage=${wordsPerPage}&filter=${sort}`;
        const rawResponse = await fetch(link, {
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
    getAggregateUserWord: async (object: NewWord) => {
        const rawResponse = await fetch(
            `https://rslang-example.herokuapp.com/users/${object.userId}/aggregatedWords/${object.wordId}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${object.token}`,
                },
            }
        );
        const content = await rawResponse.json();

        return content;
    },

    deleteUser: async (id: string, token: string) => {
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${id}`, {
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
    updateUser: async (id: string, token: string, user: unknown) => {
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${id}`, {
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
    createUser: async (user: unknown) => {
        const rawResponse = await fetch('https://rslang-example.herokuapp.com/users', {
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
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com/users/${id}`, {
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
        const rawResponse = await fetch(`https://rslang-example.herokuapp.com//users/${id}/tokens`, {
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
    signInUser: async (user: unknown) => {
        const rawResponse = await fetch('https://rslang-example.herokuapp.com/signin', {
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
    getUserWordsArray: async (id: string, token: string) => {
        const responce: Response = await fetch(`https://rslang-example.herokuapp.com/users/${id}/words`, {
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
    createUserWord: async (object: NewWord) => {
        const responce: Response = await fetch(
            `https://rslang-example.herokuapp.com/users/${object.userId}/words/${object.wordId}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${object.token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object.word),
            }
        );

        const car = await responce.json();

        return car;
    },
    deleteUserWord: async (object: NewWord) =>
        fetch(`https://rslang-example.herokuapp.com/users/${object.userId}/words/${object.wordId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${object.token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }),
    updateUserWord: async (object: NewWord) => {
        const responce: Response = await fetch(
            `https://rslang-example.herokuapp.com/users/${object.userId}/words/${object.wordId}`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${object.token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object.word),
            }
        );

        const car = await responce.json();

        return car;
    },
    getUserWordByID: async (object: NewWord) => {
        const responce: Response = await fetch(
            `https://rslang-example.herokuapp.com/users/${object.userId}/words/${object.wordId}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${object.token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        const word = await responce.json();
        return word;
    },
};

export default UserDictionary;
