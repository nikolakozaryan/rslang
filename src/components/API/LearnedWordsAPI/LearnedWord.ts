import Data from '../StatisticAPI/IData';
import Word from '../DictionaryAPI/Word';

interface LearnedWord {
  userId: string;
  token: string;
  body: {
    wordsPerDay: number;
    optional: {
      learnedWords: string;
      learnedWordsNumberSprint?: Data;
      learnedWordsNumberAudio?: Data;
    };
  };
}
export default LearnedWord;
