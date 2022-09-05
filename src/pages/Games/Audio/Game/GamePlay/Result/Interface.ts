import Word from '../../../../../../components/API/DictionaryAPI/Word';

export default interface IResult {
  correct: Word[];
  error: Word[];
  points: number;
}
