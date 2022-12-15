import Word from '../DictionaryAPI/Word';
import LearnedWord from './LearnedWord';
import ILearnedObject from './learnedWordObject';
import Data from '../StatisticAPI/IData';

export default interface ILearnWords {
  createWord: (
    userId: string,
    token: string,
    wpd: number,
    words: string[],
    wordsNumberSprint?: Data,
    wordsNumberAudio?: Data
  ) => {
    userId: string;
    token: string;
    body: {
      wordsPerDay: number;
      optional: {
        learnedWords: string;
        learnedWordsNumber?: Data;
        wordsNumberAudio?: Data;
      };
    };
  };
  updateUserLearnedWords: (object: LearnedWord) => Promise<ILearnedObject>;
  getLearnedWords: (id: string, token: string, signal?: AbortSignal) => Promise<ILearnedObject>;
}
