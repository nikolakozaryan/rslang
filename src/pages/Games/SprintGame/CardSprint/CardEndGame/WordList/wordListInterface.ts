import Word from '../../../../../../components/API/DictionaryAPI/Word';

export default interface IWordList {
  mistakes: Word[];
  learned: Word[];
  side: string;
  header: string;
}
