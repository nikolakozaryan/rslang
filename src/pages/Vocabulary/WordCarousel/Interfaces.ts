import Word from "../../../components/API/DictionaryAPI/Word";

export default interface IProps {
  color: string;
  curLevel: number;
  words: Word[];
  setWord: React.Dispatch<React.SetStateAction<string>>;
}