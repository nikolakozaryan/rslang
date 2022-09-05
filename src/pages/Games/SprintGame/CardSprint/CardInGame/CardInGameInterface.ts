import Word from '../../../../components/API/DictionaryAPI/Word';

export default interface ICardInGame {
  done: boolean[][];
  correct: boolean[][];
  refresh: (buttonAnswer: boolean) => void;
  refreshAnswer: (correct: boolean) => void;
  ourGuess: Word;
  wordGuess: Word;
  score: number;
  nextQ: number;
}
