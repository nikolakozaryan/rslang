import IDictionary from './DictionaryInterface';

const DictionaryAPI: IDictionary = {
    getWordsArray: async (page: number, group: number) => {
        const response = await fetch(`https://rslang-example.herokuapp.com/words?page=${page}&group=${group}`);
        const arrayOfWords = await response.json();
        return arrayOfWords;
    },
    getWordByID: async (id: string) => {
        const response = await fetch(`https://rslang-example.herokuapp.com/words/${id}`);
        const word = await response.json();
        return word;
    },
};

export default DictionaryAPI;
