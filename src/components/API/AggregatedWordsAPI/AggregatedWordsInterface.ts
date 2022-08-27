import URLQueries from './urlQueries';
import NewWord from '../../UserDictionaryAPI/type';

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
    getAggregateUserWord: (object: NewWord) => Promise<Response>;
}
