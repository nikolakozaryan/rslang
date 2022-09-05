import Statistic from './Statistic';
import Data from './IData';

export default interface IStatistic {
  createStatistic: (
    userId: string,
    token: string,
    learnedWords: number,
    sprintPointsInARow: Data,
    audioPointsInARow: Data,
    sprintCorrectAnswers: Data,
    audioCorrectAnswers: Data,
    learnedSprint: Data,
    learnedAudio: Data,
    gamesAmoutSprint: Data,
    gamesAmoutAudio: Data,
    gamesScoreSprint: Data,
    gamesScoreAudio: Data,

    testFieldString?: string,
    testFieldBoolean?: boolean
  ) => Statistic;
  updateUserStatistic: (object: Statistic) => Promise<Statistic>;
  getStatistic: (id: string, token: string) => Promise<Statistic>;
}
