export default interface IDifficultyCard {
  content: string;
  id: number;
  color: string;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}
