export interface AuthState {
  token: string;
  error: string;
  loading: boolean;
}

export const authInitialState: AuthState = {
  token: null,
  error: null,
  loading: false
}