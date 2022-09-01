export interface Init {
  difficultyLevel: number;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  setDifficultyLevel: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
