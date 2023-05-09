import Word from '../../../../../../../components/API/DictionaryAPI/Word';

export default interface ISlider {
  correct: Word[];
  error: Word[];
  points: number;
}
