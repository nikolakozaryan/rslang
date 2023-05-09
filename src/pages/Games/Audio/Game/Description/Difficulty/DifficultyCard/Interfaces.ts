import { Dispatch, SetStateAction } from 'react';

export default interface IDifficultyCard {
  content: string;
  id: number;
  color: string;
  setLevel: Dispatch<SetStateAction<number>>;
}
