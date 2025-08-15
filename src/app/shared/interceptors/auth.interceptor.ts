import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../store/auth';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const store = inject(Store);
  const token = localStorage.getItem('auth_token');

  const authReq = token
    ? req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      })
    : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        store.dispatch(logout());
      }
      return throwError(() => err);
    })
  );
}
