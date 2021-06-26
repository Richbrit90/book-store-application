import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const SHARED_STATE_NAME = 'auth';

const getSharedState = createFeatureSelector<AuthState>(SHARED_STATE_NAME);

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.message;
});
