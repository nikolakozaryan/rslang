export interface Init {
  curLevel: number;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurLevel: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
