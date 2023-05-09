import { Dispatch, SetStateAction } from 'react';
import Word from '../../../components/API/DictionaryAPI/Word';

export default interface IProps {
  accentColor: string;
  difficultyLevel: number;
  words: Word[];
  page: number;
  setWord: Dispatch<SetStateAction<string>>;
}
