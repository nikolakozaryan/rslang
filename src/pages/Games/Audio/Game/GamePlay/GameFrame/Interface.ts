import Word from '../../../../../../components/API/DictionaryAPI/Word';

export default interface IGameFrame {
  currentWords: Word[];
  corrects: Word[];
  error: Word[];
  points: number;
  streak: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  setCorrects: React.Dispatch<React.SetStateAction<Word[]>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<Word[]>>;
}
