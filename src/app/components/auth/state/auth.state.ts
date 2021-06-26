import { User } from "../../../models/user.model";

export interface AuthState {
  user: User | null;
  message : Readonly<string>;
}

export const initialState: AuthState = {
  user: null,
  message : ''
};
