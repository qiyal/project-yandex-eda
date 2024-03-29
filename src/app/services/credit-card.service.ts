import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Card} from '../models/card';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CreditCardService {
  api = '/creditCards';

  constructor(
    private http: HttpClient
  ) { }

  getUserCreditCards(userId: number): Observable<Card[]> {
    return this.http.get<Card[]>(this.api + `?userId=${userId}`);
  }

  getCreditCardByNumber(cardNumber: number, userId: number): Observable<Card[]> {
    return this.http.get<Card[]>(this.api + `?userId=${userId}&cardNumber=${cardNumber}`);
  }

  postCart(card: Card): Observable<Card> {
    return this.http.post<Card>(this.api, card);
  }

  deleteCard(cardId: number): Observable<Card> {
    return this.http.delete<Card>(this.api + `/${cardId}`);
  }
}
