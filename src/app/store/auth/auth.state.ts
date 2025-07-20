export interface AuthState {
  username: string;
  token: string;
  error: string;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const authInitialState: AuthState = {
  username: null,
  token: null,
  error: null,
  isLoading: false,
  isAuthenticated: false,
};
