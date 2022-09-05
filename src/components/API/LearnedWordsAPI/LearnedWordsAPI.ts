import SERVER from '../../../common/constants/serverConst';
import LearnedWord from './LearnedWord';
import Word from '../DictionaryAPI/Word';
import ILearnWords from './LearnedWordsInterface';
import Data from '../StatisticAPI/IData';

const LearnedWordsAPI: ILearnWords = {
  createWord: (
    userId: string,
    token: string,
    wpd: number,
    words: string[],
    wordsNumberSprint?: Data,
    wordsNumberAudio?: Data
  ) => ({
    userId,
    token,
    body: {
      wordsPerDay: wpd,
      optional: {
        learnedWords: words.join(' '),
        learnedWordsNumberSprint: wordsNumberSprint,
        learnedWordsNumberAudio: wordsNumberAudio,
      },
    },
  }),
  updateUserLearnedWords: async (object: LearnedWord) => {
    const rawResponse = await fetch(`${SERVER}/users/${object.userId}/settings`, {
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
  },
  getLearnedWords: async (id: string, token: string) => {
    try {
      const rawResponse = await fetch(`${SERVER}/users/${id}/settings`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const content = await rawResponse.json();
      return content;
    } catch (error) {
      console.log('we are here');
      console.log(error);
      const date = new Date().setHours(0, 0, 0);
      const WN = { [date]: 0 };
      const words = LearnedWordsAPI.createWord(id, token, 1, ['words'], WN, WN);
      LearnedWordsAPI.updateUserLearnedWords(words);
      const rawResponse = await fetch(`${SERVER}/users/${id}/settings`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const content = await rawResponse.json();
      return content;
    }
  },
};

export default LearnedWordsAPI;
