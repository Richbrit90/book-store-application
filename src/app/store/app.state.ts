import { AuthReducer } from "../components/auth/state/auth.reducer";
import { SharedState } from "./shared/shared.state";
import { bookReducer } from "../components/book-list/state/book.reducer";


export interface AppState {
  ['SHARED_STATE_NAME']: SharedState,
  errorMessage : '';
}

export const appReducer = {
  auth: AuthReducer,
  books: bookReducer,
};
