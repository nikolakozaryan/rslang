import Word from '../../../../../../components/API/DictionaryAPI/Word';
import IAudio from '../../../Interface';

export default interface IResult extends IAudio {
  correct: Word[];
  error: Word[];
  streak: number;
  points: number;
}
