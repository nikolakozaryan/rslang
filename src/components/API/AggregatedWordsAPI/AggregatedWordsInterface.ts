import URLQueries from './urlQueries';
import NewUserWord from '../UserDictionaryAPI/Word';

export default interface IAggregatedWords {
    createUrlQueries: (
        id: string,
        token: string,
        page: string,
        wordsPerPage: string,
        sort: string,
        group?: string
    ) => URLQueries;
    getAllAggregatedUserWords: (URLQueries: URLQueries) => Promise<Response>;
    getAggregateUserWord: (object: NewUserWord) => Promise<Response>;
}
