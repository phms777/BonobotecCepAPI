import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Login from '../models/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'https://localhost:44331/api/';

  constructor(private http: HttpClient) { }

  login(user: Login ) {
      return this.http.post(this.url+'user', user, httpOptions).toPromise();
  }

  createAccount(account: any){
    return new Promise ((resolve) => {
      resolve (true);
    })
  }
}
