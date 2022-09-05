import { Dispatch, KeyboardEventHandler, SetStateAction } from 'react';
import Word from '../../../components/API/DictionaryAPI/Word';

export default interface ICardSprint {
  done: boolean[][];
  correct: boolean[][];
  refresh: (buttonAnswer: boolean) => void;
  refreshAnswer: (correct: boolean) => void;
  ourGuess: Word;
  wordGuess: Word;
  score: number;
  game: boolean;
  mistakes: Word[];
  learned: Word[];
  backToGame: () => void;
  nextQ: number;
}
