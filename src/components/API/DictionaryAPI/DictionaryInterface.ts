import Word from './Word';

interface IDictionary {
    getWordsArray: (page: number, group: number) => Promise<Word[]>;
    getWordByID: (id: string) => Promise<Word>;
}
export default IDictionary;
