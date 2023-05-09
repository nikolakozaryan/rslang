import { Dispatch, SetStateAction } from 'react';

export default interface IAudio {
  setPoints: Dispatch<SetStateAction<number>>;
  setAmount: Dispatch<SetStateAction<number>>;
  setCorrect: Dispatch<SetStateAction<number>>;
}
