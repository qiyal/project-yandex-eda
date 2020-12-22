import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api = '/orders';

  constructor(
    private http: HttpClient
  ) { }

  postOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>(this.api, newOrder);
  }

  getAllUserOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.api + `?customersId=${userId}`);
  }
}
