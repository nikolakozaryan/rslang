import NewUserWord from './Word';
import Word from '../DictionaryAPI/Word';

export default interface IUserDictionary {
    createNewWord: (
        userId: string,
        wordId: string,
        difficulty: string,
        testFieldString: string,
        testFieldBoolean: boolean,
        token: string
    ) => NewUserWord;
    getUserWordsArray: (id: string, token: string) => Promise<Word[]>;
    createUserWord: (object: NewUserWord) => Promise<NewUserWord>;
    deleteUserWord: (object: NewUserWord) => Promise<Response>;
    updateUserWord: (object: NewUserWord) => Promise<NewUserWord>;
    getUserWordByID: (object: NewUserWord) => Promise<Word>;
}
