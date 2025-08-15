import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class GuestGroupService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<string> {
    return this.http.get<string>(API_ENDPOINTS.guestGroups());
  }
}
