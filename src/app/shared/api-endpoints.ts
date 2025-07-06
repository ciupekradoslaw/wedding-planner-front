import { environment } from '../../environments/environment';

export const API_ENDPOINTS = {
  login: () => `${environment.apiUrl}/login`,
};
