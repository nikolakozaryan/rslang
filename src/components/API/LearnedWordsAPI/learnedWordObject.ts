import Data from '../StatisticAPI/IData';

export default interface ILearnedObject {
  length: number;
  wordsPerDay: number;
  optional: {
    learnedWords: string;
    learnedWordsNumberSprint?: Data;
    learnedWordsNumberAudio?: Data;
  };
}
