import Word from '../../../../components/API/DictionaryAPI/Word';

export default interface ICardInGame {
  mistakes: Word[];
  learned: Word[];
  done: boolean[][];
  correct: boolean[][];
  refresh: (buttonAnswer: boolean) => void;
  refreshAnswer: (correct: boolean) => void;
  ourGuess: Word;
  wordGuess: Word;
  score: number;
  game: boolean;
  backToGame: () => void;
}
