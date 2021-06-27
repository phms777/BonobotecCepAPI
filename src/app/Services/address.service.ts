import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Address from '../models/Address';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class AddressService {

  private url = 'https://localhost:44331/api/';

  constructor(private http: HttpClient) {
  }

  getAddress(cep: string) : Promise<Address> {
      return this.http.get<Address>(this.url+cep).toPromise();
  }
}