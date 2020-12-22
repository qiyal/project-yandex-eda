import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../models/item";
import {Observable} from "rxjs";

@Injectable()
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(restaurantId: number, link: string): Observable<Item[]> {
    return this.http.get<Item[]>(link + `?restaurantId=${restaurantId}`);
  }
}
