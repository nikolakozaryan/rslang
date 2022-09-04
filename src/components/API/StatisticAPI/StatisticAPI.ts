import SERVER from '../../../common/constants/serverConst';
import Statistic from './Statistic';
import IStatistic from './StatisticInterface';
import Data from './IData';

const UserStatistic: IStatistic = {
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
    testFieldString?: string,
    testFieldBoolean?: boolean
  ) => ({
    userId,
    token,
    body: {
      learnedWords,
      optional: {
        sprintPointsInARow,
        audioPointsInARow,
        sprintCorrectAnswers,
        audioCorrectAnswers,
        learnedSprint,
        learnedAudio,
        testFieldString,
        testFieldBoolean,
      },
    },
  }),

  getStatistic: async (id: string, token: string) => {
    const rawResponse = await fetch(`${SERVER}/users/${id}/statistics`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const content = await rawResponse.json();

    return content;
  },
  updateUserStatistic: async (object: Statistic) => {
    const resp = await UserStatistic.getStatistic(object.userId, object.token);
    const objectExist = Object.assign(resp);
    const copy = Object.assign(object);
    Object.keys(objectExist.optional).forEach((item: string) => {
      const propExist = objectExist.optional[item];
      const propNew = object.body.optional[item as keyof typeof object.body.optional] as object;
      const assign = { ...propExist, ...propNew};
      copy.body.optional[item] = assign;
      // console.log(propExist, propNew, 'here', copy[item], copy[item as keyof typeof object.body.optional]);
      // objectExist.optional[item] = Object.assign(propExist, propNew);
      // console.log(objectExist.optional[item], 'whaawetawetawet');
      // console.log(objectExist);
    });

    const rawResponse = await fetch(`${SERVER}/users/${object.userId}/statistics`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${object.token}`,
      },
      body: JSON.stringify(copy.body),
    });
    const content = await rawResponse.json();
    return content;
  },
};

export default UserStatistic;
