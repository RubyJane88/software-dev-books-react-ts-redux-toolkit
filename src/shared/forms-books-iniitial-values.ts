import * as yup from 'yup';

export const formsBooksInitialValues = {
  id: '',
  bookTitle: '',
  author: '',
  datePublished: '',
  ratingReview: '',
  summaryText: '',
};

export const validationSchema = yup.object({
  bookTitle: yup.string().label('Book Title').min(2).required(),
  author: yup.string().label('Author').min(2).required(),
  datePublished: yup.string().label('Date Published'),
  ratingReview: yup.string().label('Rating Review'),
  summaryText: yup.string().label('Book Summary').min(50).required(),
});
