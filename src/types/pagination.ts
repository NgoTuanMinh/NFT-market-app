export interface PaginationParams {
  page: number;
  limit: number;
}

export interface DataResponse<T> {
  currentPage: number;
  itemPage: number;
  lastPage: number;
  total: number;
  data: T[];
}

export const initialPaginationParams = {page: 1, limit: 5};