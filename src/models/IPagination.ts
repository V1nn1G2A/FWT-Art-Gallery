export interface IPaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  theme: 'light' | 'dark';
  // eslint-disable-next-line no-unused-vars
  onClick: (page: number) => void;
}

export interface IPaginationOptions {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}
