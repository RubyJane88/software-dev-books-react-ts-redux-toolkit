export type PacktBookStateType = {
  readonly packtBooks: PacktBookModel[];
  readonly packtBook: PacktBookModel;
  readonly loading: boolean;
  readonly error: string;
  readonly tempData?: any[];
};

export type ApiResponse = Record<string, any>;

export type PacktBookModel = {
  id: string;
  bookTitle: string;
  author: string;
  datePublished: string;
  ratingReview: string;
  summaryText: string;
} & ApiResponse;

export const packtBookNameSpace = 'packt';

export const PacktBookActionTypes = {
  FETCH_PACKT_BOOKS: `@@/${packtBookNameSpace}/FETCH_PACKT_BOOKS`,
  REMOVE_PACKT_BOOKS_BY_ID: `@@/${packtBookNameSpace}/REMOVE_PACKT_BOOKS_BY_ID`,
};
