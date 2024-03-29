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

  getAllRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.api);
  }

  getRestaurantByTag(tag: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.api + `?productList_like=${tag}`);
  }

  getRestaurantsByManyOptions(name: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.api + `?name_like=${name}`);
  }

  getPopulars(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.api + `?_sort=rating&_order=desc&_limit=6`);
  }
}
