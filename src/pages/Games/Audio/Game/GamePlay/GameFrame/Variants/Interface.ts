import Word from '../../../../../../../components/API/DictionaryAPI/Word';

export default interface IVariants {
  correct: Word[];
  error: Word[];
  streak: number;
  variants: Word[];
  remainingWords: Word[];
  currentWord: Word;
  points: number;
  setRemainingWords: React.Dispatch<React.SetStateAction<Word[]>>;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  setIsSettled: React.Dispatch<React.SetStateAction<boolean>>;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<Word[]>>;
  setError: React.Dispatch<React.SetStateAction<Word[]>>;
}
