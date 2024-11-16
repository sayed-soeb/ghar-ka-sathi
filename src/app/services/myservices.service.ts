import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
  private apiUrl = 'com/api/services';

  constructor(private http: HttpClient) {}

  // Fetch services by email
  getServicesByEmail(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/services-by-email`, { email });
  }

  // Delete a service
  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
