import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  signup(username: string, email: string, address: string, pincode: number, password: string, cPassword: string): Observable<any> {
    return this.http.post(`${this.url}/user/signup`, {
      username: username,
      email: email,
      address: address,
      pincode: pincode,
      password: password,
      cPassword: cPassword
    })
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/user/login`, {
      username: username,
      password: password
    })
  }
}
