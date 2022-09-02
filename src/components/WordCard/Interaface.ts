export default interface ICard {
  id: string;
  word: string;
  color: string;
  wordTranslate: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}
