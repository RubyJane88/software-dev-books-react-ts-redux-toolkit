export type OreillyBookStateType = {
  readonly oreillyBooks: OreillyBookModel[];
  readonly oreillyBook: OreillyBookModel;
  readonly loading: boolean;
  readonly error: string;
  readonly tempData?: any[];
};

export type ApiResponse = Record<string, any>;

export type OreillyBookModel = {
  id: string;
  bookTitle: string;
  author: string;
  datePublished: string;
  ratingReview: string;
  summaryText: string;
} & ApiResponse;

export const oreillyBookNameSpace = 'oreilly';

export const OreillyBookActionTypes = {
  FETCH_OREILLY_BOOKS: `@@/${oreillyBookNameSpace}/FETCH_OREILLY_BOOKS`,
};
