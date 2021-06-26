import {loginSuccess, setErrorMessage} from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';

const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),on(setErrorMessage, (state, action) => {
    return {
      ...state,
      message:action['message'],
    };
  })
);


export function AuthReducer(state, action) {
  return authReducer(state, action);
}
