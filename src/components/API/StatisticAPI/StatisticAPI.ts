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
    gamesAmoutSprint: Data,
    gamesAmoutAudio: Data,
    gamesScoreSprint: Data,
    gamesScoreAudio: Data,

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
        gamesAmoutSprint,
        gamesAmoutAudio,
        gamesScoreSprint,
        gamesScoreAudio,

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
    try {
      const resp = await UserStatistic.getStatistic(object.userId, object.token);
      const objectExist = Object.assign(resp);
      const copy = Object.assign(object);
      Object.keys(objectExist.optional).forEach((item: string) => {
        const propExist = objectExist.optional[item];
        const propNew = object.body.optional[item as keyof typeof object.body.optional] as object;
        switch (item) {
          case 'sprintPointsInARow':
          case 'audioPointsInARow': {
            const key: keyof Data = Object.keys(propNew)[0];
            const scoreObject: Data = propNew[key as keyof typeof propNew];
            const scoreOld = propExist[key];
            if (scoreOld === undefined) {
              const assign = { ...propExist, ...propNew };
              copy.body.optional[item] = assign;
            } else if (scoreObject >= scoreOld) {
              const assign = { ...propExist, ...propNew };
              copy.body.optional[item] = assign;
            } else {
              const assign = { ...propExist };
              copy.body.optional[item] = assign;
            }

            break;
          }
          case 'gamesScoreSprint': {
            const key: keyof Data = Object.keys(propNew)[0];
            const scoreObject = propNew[key as keyof typeof propNew];
            const scoreNew = scoreObject;
            const scoreOld = propExist[Object.keys(propNew)[0]];
            if (scoreOld === undefined) {
              console.log('here');
              const sumScore = scoreNew;
              const newObjectScore = { [key]: sumScore };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            } else if (scoreNew === scoreOld) {
              console.log('here2');
              const newObjectScore: Data = { [key]: scoreOld };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            } else if (scoreNew !== scoreOld) {
              console.log('here3');
              const amount = objectExist.optional.gamesAmoutSprint;
              const amountN = amount[Object.keys(amount)[0]];
              const oldScoreAll = scoreOld * (amountN - 1);
              const sumScore = oldScoreAll + scoreNew;
              console.log(sumScore, scoreOld, scoreNew, 'gamesp');
              const result = Number((sumScore / amountN).toFixed(2));
              const newObjectScore: Data = { [key]: result };
              console.log(sumScore, scoreOld, scoreNew, 'gameau', amountN, result, newObjectScore, 'afetspr');
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            }

            break;
          }
          case 'gamesScoreAudio': {
            const key: keyof Data = Object.keys(propNew)[0];
            const scoreObject: Data = propNew[key as keyof typeof propNew];
            const scoreNew = scoreObject;

            const scoreOld = propExist[Object.keys(propNew)[0]];
            if (!scoreOld) {
              const sumScore = scoreNew;

              const newObjectScore = { [key]: sumScore };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            } else if (scoreNew === scoreOld) {
              const newObjectScore: Data = { [key]: scoreOld };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            } else if (scoreNew !== scoreOld) {
              const sumScore = scoreOld + scoreNew;
              console.log(sumScore, scoreOld, scoreNew, 'gameau');
              const amount = objectExist.optional.gamesAmoutAudio;
              const amountN = amount[Object.keys(amount)[0]];
              const result = sumScore / amountN;
              const newObjectScore: Data = { [key]: result };
              console.log(sumScore, scoreOld, scoreNew, 'gameau', amountN, result, newObjectScore, 'afetau');
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            }

            break;
          }
          case 'gamesAmoutSprint':
          case 'gamesAmoutAudio': {
            const key: keyof Data = Object.keys(propNew)[0];
            const scoreObject: Data = propNew[key as keyof typeof propNew];
            const scoreNew = scoreObject;
            const scoreOld = propExist[Object.keys(propNew)[0]];

            if (scoreOld === undefined) {
              const sumScore = scoreNew;
              const newObjectScore = { [key]: sumScore };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            } else {
              const sumScore = scoreOld + scoreNew;
              const newObjectScore: Data = { [key]: sumScore };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            }

            break;
          }
          case 'learnedSprint':
          case 'learnedAudio': {
            const key: keyof Data = Object.keys(propNew)[0];
            const scoreObject: Data = propNew[key as keyof typeof propNew];
            const scoreNew = scoreObject;
            const scoreOld = propExist[Object.keys(propNew)[0]];

            if (scoreOld === undefined) {
              const sumScore = scoreNew;
              const newObjectScore = { [key]: sumScore };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            } else {
              const sumScore = scoreOld + scoreNew;
              const newObjectScore: Data = { [key]: sumScore };
              const assign = { ...propExist, ...newObjectScore };
              copy.body.optional[item] = assign;
            }

            break;
          }

          // case 'sprintCorrectAnswers':
          // case 'audioCorrectAnswers': {
          //   const key: keyof Data = Object.keys(propNew)[0];
          //   const scoreObject: Data = propNew[key as keyof typeof propNew];
          //   const scoreNew = scoreObject;
          //   const scoreOld = propExist[Object.keys(propNew)[0]];
          //   if (scoreOld === undefined) {
          //     const sumScore = scoreNew;
          //     const newObjectScore = { [key]: sumScore };
          //     const assign = { ...propExist, ...newObjectScore };
          //     copy.body.optional[item] = assign;
          //   } else {
          //     const sumScore = scoreOld + scoreNew;
          //     const newObjectScore: Data = { [key]: sumScore };
          //     const assign = { ...propExist, ...newObjectScore };
          //     copy.body.optional[item] = assign;
          //   }

          //   break;
          // }
          default: {
            console.log('default');
            break;
          }
        }
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
    } catch (error) {
      const rawResponse = await fetch(`${SERVER}/users/${object.userId}/statistics`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${object.token}`,
        },
        body: JSON.stringify(object.body),
      });
      const content = await rawResponse.json();
      return content;
    }
  },
};

export default UserStatistic;
