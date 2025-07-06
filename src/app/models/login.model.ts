import { FormControl } from '@angular/forms';

export type LoginResponse = {
  token?: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginForm = {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
};
