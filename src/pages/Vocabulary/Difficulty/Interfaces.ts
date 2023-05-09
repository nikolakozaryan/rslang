import { Dispatch, SetStateAction } from 'react';

export interface Init {
  difficultyLevel: number;
  setAccentColor: Dispatch<SetStateAction<string>>;
  setDifficultyLevel: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
}
