import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  link =
    'http://api.currencylayer.com/live?access_key=7b239b58f93255b5ef5795cdc77cee8c';

  constructor(private http: HttpClient) {}

  getRates() {
    return this.http.get(this.link);
  }
}
