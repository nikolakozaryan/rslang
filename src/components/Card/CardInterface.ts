import { ReactNode } from 'react';

export default interface ICard {
  className?: string;
  type: string;
  children: ReactNode;
}
