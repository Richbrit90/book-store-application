import {Book} from "../../../models/book";
import {createReducer, on} from "@ngrx/store";
import {getBooksSuccess} from "./book.action";

export interface BookState {
  books: ReadonlyArray<Book>;
}

const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(getBooksSuccess, (state, { books }) => [...books]),
);
