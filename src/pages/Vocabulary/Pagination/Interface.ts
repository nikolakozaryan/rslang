export default interface IPagination {
  accentColor: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
