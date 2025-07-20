import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, UserInterface } from '../../models/login.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  currentUserSig = signal<UserInterface | undefined | null>(undefined);

  login(request: LoginRequest): Observable<UserInterface> {
    return this.http.post<UserInterface>(API_ENDPOINTS.login(), request);
  }
}
