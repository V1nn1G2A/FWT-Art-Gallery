export interface IPaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  theme: 'light' | 'dark';
  // Вопрос Косте: Как передать функцию, которая принимает параметр?
  // Линтер говорит что параметр объявлен, но не использован.
  // eslint-disable-next-line no-unused-vars
  onClick: (page: number) => void;
}

export interface IPaginationOptions {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}
