import { createAction } from "@ngrx/store";
import { Book } from "../../../models/book";

export const getBooks = createAction('[Books] Get Books');
export const getBooksSuccess = createAction(
  '[Book] Get book success',
  (books: ReadonlyArray<Book>) => ({ books })
);
