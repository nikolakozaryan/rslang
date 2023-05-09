import { Dispatch, SetStateAction } from 'react';

export default interface ICard {
  index: number;
  wordId: string;
  word: string;
  accentColor: string;
  wordTranslate: string;
  setWord: Dispatch<SetStateAction<string>>;
}
