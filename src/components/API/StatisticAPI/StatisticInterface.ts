import Statistic from './Statistic';

export default interface IStatistic {
  createStatistic: (
    userId: string,
    token: string,
    learnedWords: string,
    testFieldString?: string,
    testFieldBoolean?: boolean
  ) => Statistic;
  updateUserStatistic: (object: Statistic) => Promise<Statistic>;
  getStatistic: (id: string, token: string) => Promise<Statistic>;
}
