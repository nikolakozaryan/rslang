import Word from '../../components/API/DictionaryAPI/Word';

const randomPage = () => Math.floor(Math.random() * 29 + 0.5);

const shuffleArray = (words: Word[]) => [...words].sort(() => Math.random() - 0.5);

export { randomPage, shuffleArray };
