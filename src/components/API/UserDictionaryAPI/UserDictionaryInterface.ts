import NewUserWord from './Word';
import Word from '../DictionaryAPI/Word';

export default interface IUserDictionary {
    getUserWordsArray: (id: string, token: string) => Promise<Word[]>;
    createUserWord: (object: NewUserWord) => Promise<NewUserWord>;
    deleteUserWord: (object: NewUserWord) => Promise<Response>;
    updateUserWord: (object: NewUserWord) => Promise<NewUserWord>;
    getUserWordByID: (object: NewUserWord) => Promise<Word>;
}
