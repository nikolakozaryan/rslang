export default interface IPagination {
  color: string;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}
