export type ManningBookStateType = {
  readonly manningBooks: ManningBookModel[];
  readonly manningBook: ManningBookModel;
  readonly loading: boolean;
  readonly error: string;
  readonly tempData?: any[];
};

export type ApiResponse = Record<string, any>;

export type ManningBookModel = {
  id: string;
  bookTitle: string;
  author: string;
  datePublished: string;
  ratingReview: string;
  summaryText: string;
} & ApiResponse;

export const manningBookNameSpace = 'manning';

export const ManningBookActionTypes = {
  FETCH_MANNING_BOOKS: `@@/${manningBookNameSpace}/FETCH_MANNING_BOOKS`,
  REMOVE_MANNING_BOOK_BY_ID: `@@/${manningBookNameSpace}/REMOVE_MANNING_BOOK_BY_ID`,
};
