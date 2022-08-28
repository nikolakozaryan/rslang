import NewUserWord from '../UserDictionaryAPI/Word';
import IAggregatedWords from './AggregatedWordsInterface';
import URLQueries from './urlQueries';

const AggregatedWordsAPI: IAggregatedWords = {
  createUrlQueries: (id: string, token: string, page: string, wordsPerPage: string, sort: string, group?: string) => ({
    id,
    token,
    page,
    wordsPerPage,
    sort,
    group,
  }),

  getAllAggregatedUserWords: async (urlQueries: URLQueries) => {
    const link = urlQueries.group
      ? `https://rslang-example.herokuapp.com/users/${urlQueries.id}/aggregatedWords?group=${urlQueries.group}&page=${urlQueries.page}&wordsPerPage=${urlQueries.wordsPerPage}&filter=${urlQueries.sort}`
      : `https://rslang-example.herokuapp.com/users/${urlQueries.id}/aggregatedWords?page=${urlQueries.page}&wordsPerPage=${urlQueries.wordsPerPage}&filter=${urlQueries.sort}`;
    const rawResponse = await fetch(link, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${urlQueries.token}`,
      },
    });
    const content = await rawResponse.json();

    return content;
  },
  getAggregateUserWord: async (object: NewUserWord) => {
    const rawResponse = await fetch(
      `https://rslang-example.herokuapp.com/users/${object.userId}/aggregatedWords/${object.wordId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${object.token}`,
        },
      }
    );
    const content = await rawResponse.json();

    return content;
  },
};

export default AggregatedWordsAPI;
