export type ApressBookStateType = {
  readonly apressBooks: ApressBookModel[];
  readonly apressBook: ApressBookModel;
  readonly loading: boolean;
  readonly error: string;
  readonly tempData?: any[];
};

export type ApiResponse = Record<string, any>;

export type ApressBookModel = {
  id: string;
  bookTitle: string;
  author: string;
  datePublished: string;
  ratingReview: string;
  summaryText: string;
} & ApiResponse;

export const apressBookNameSpace = 'apress';

export const ApressBookActionTypes = {
  FETCH_APRESS_BOOKS: `@@/${apressBookNameSpace}/FETCH_APRESS_BOOKS`,
  /*  FETCH_APRESS_BOOKS_BY_ID: `@@/${apressBookNameSpace}/FETCH_APRESS_BOOKS_BY_ID`,
  REMOVE_APRESS_BOOKS_BY_ID: `@@/${apressBookNameSpace}/REMOVE_APRESS_BOOKS_BY_ID`,
  ADD_APRESS_BOOK: `@@/${apressBookNameSpace}/ADD_APRESS_BOOK`,
  UPDATE_APRESS_BOOK: `@@/${apressBookNameSpace}/UPDATE_APRESS_BOOK`,*/
};
