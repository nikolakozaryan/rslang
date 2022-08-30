import { ReactNode } from 'react';

export interface ICard {
  id: number;
  color: string;
  curLevel: number;
  children: ReactNode;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}
