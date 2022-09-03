import Data from './IData';

type Options = {
  learnedWords: number;
  optional: {
    testFieldString?: string;
    testFieldBoolean?: boolean;
    sprintPointsInARow: Data;
    audioPointsInARow: Data;
    sprintCorrectAnswers: Data;
    audioCorrectAnswers: Data;
    learnedSprint: Data;
    learnedAudio: Data;
  };
};
type Statistic = {
  userId: string;
  token: string;
  body: Options;
};
export default Statistic;
