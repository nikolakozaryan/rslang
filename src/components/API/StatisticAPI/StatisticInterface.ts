import Statistic from './Statistic';

export default interface IStatistic {
    updateUserStatistic: (object: Statistic) => Promise<Statistic>;
    getStatistic: (id: string, token: string) => Promise<Statistic>;
}
