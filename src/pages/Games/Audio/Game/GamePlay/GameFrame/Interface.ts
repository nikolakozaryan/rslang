import { Dispatch, SetStateAction } from 'react';
import Word from '../../../../../../components/API/DictionaryAPI/Word';

export default interface IGameFrame {
  currentWords: Word[];
  corrects: Word[];
  error: Word[];
  points: number;
  streak: number;
  setPoints: Dispatch<SetStateAction<number>>;
  setStreak: Dispatch<SetStateAction<number>>;
  setCorrects: Dispatch<SetStateAction<Word[]>>;
  setFinished: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<Word[]>>;
}
