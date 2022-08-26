import IWord from '../../common/interfaces/IWord';

type IDictionary = {
    getWordsArray: (page: number, group: number) => Promise<IWord[]>;
    getWordByID: (id: string) => Promise<IWord>;
};
export default IDictionary;
