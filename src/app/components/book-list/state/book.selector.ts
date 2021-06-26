import { createSelector } from "@ngrx/store";
import { BookState } from "./book.reducer";
import { Book } from "../../../models/book";

export const bookSelector = createSelector(
  (state: BookState) => state.books,
  (movies: ReadonlyArray<Book>) => movies
);

export const selectById = (id: number) =>
  createSelector(bookSelector, (books) => {
    return books.filter((book: Book) => book.id === id);
  });
