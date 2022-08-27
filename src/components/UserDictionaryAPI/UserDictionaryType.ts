import IWord from './IWord';

type IUserDictionary = {
    getUserWordsArray: (id: string) => Promise<IWord[]>;
    createUserWord: (userId: string, wordState: IWord) => Promise<IWord>;
    updateUserWord: (userId: string, wordId: string, wordState: IWord) => Promise<IWord>;
    deleteUserWord: (userId: string, wordId: string) => Promise<Response>;
    getUserWordByID: (userId: string, wordId: string) => Promise<IWord>;
    createUser: (id: string, email: string, password: string) => Promise<Response>;
};
export default IUserDictionary;
