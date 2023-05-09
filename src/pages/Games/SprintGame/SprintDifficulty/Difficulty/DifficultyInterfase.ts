import { Dispatch, SetStateAction } from 'react';

export default interface IDifficultyGame {
  difficulty: string;
  change: (difficultyLevel: number) => void;
  id: number;
  activeChange: Dispatch<SetStateAction<boolean>>;
}
