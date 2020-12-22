import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../models/restaurant";

@Injectable()
export class RestaurantService {

  api = '/restaurants';

  constructor(
    private http: HttpClient
  ) { }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.api + `/${id}`);
  }
}
