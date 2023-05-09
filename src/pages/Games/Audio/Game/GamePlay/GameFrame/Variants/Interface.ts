import { Dispatch, SetStateAction } from 'react';
import Word from '../../../../../../../components/API/DictionaryAPI/Word';

export default interface IVariants {
  corrects: Word[];
  error: Word[];
  streak: number;
  variants: Word[];
  remainingWords: Word[];
  currentWord: Word;
  points: number;
  setRemainingWords: Dispatch<SetStateAction<Word[]>>;
  setPoints: Dispatch<SetStateAction<number>>;
  setIsSettled: Dispatch<SetStateAction<boolean>>;
  setStreak: Dispatch<SetStateAction<number>>;
  setCorrects: Dispatch<SetStateAction<Word[]>>;
  setError: Dispatch<SetStateAction<Word[]>>;
}
