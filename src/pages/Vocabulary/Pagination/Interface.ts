export default interface IPagination {
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}
