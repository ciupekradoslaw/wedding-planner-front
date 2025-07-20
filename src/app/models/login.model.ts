import { FormControl } from '@angular/forms';

export interface UserInterface {
  username: string;
  token: string;
}

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginForm = {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
};
