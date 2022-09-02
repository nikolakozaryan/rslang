export default interface ICard {
  index: number;
  wordId: string;
  word: string;
  accentColor: string;
  wordTranslate: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}
