import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ICard {
  id: number;
  color: string;
  curLevel: number;
  children: ReactNode;
  setLevel: Dispatch<SetStateAction<number>>;
  setAccentColor: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}
