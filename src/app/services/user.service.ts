import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    const URL = 'https://gorest.co.in/public/v2/users';
    return this.http.get<any>(URL);
  }
}
