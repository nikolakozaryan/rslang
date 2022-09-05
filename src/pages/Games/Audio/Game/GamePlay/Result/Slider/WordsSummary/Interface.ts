import Word from '../../../../../../../../components/API/DictionaryAPI/Word';

export default interface ISummary {
  correct: Word[];
  error: Word[];
}
