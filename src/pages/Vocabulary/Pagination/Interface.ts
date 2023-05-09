import { Dispatch, SetStateAction } from 'react';

export default interface IPagination {
  accentColor: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
