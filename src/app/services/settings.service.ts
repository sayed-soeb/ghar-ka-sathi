// settings.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = 'https://backend-gharkasathi.onrender.com/api/auth';

  constructor(private http: HttpClient) {}

  changePassword(email: string, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, { email, currentPassword, newPassword });
  }

  deleteUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete-user`, { email, password });
  }
}
