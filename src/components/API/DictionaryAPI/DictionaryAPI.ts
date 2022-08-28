import IDictionary from './DictionaryInterface';
import SERVER from '../../../common/constants/serverConst';

const DictionaryAPI: IDictionary = {
    getWordsArray: async (page: number, group: number) => {
        const response = await fetch(`${SERVER}/words?page=${page}&group=${group}`);
        const arrayOfWords = await response.json();
        return arrayOfWords;
    },
    getWordByID: async (id: string) => {
        const response = await fetch(`${SERVER}/words/${id}`);
        const word = await response.json();
        return word;
    },
};

export default DictionaryAPI;
