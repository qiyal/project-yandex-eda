import { Injectable } from '@angular/core';
import {Item} from "../models/item";

@Injectable()
export class CartService {
  cart: CartMap[] = [];

  constructor() { }

  addItem(newItem: Item) {
    let has = false;

    for (const item of this.cart) {
      if (item.item === newItem) {
        has = true;
        break;
      }
    }

    if (has) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].item === newItem) {
          this.cart[i].q++;
          break;
        }
      }
    } else {
      this.cart.push(new CartMap(newItem, 1));
    }
  }
}

export class CartMap{
  constructor(
    public item: Item,
    public q: number
  ) {}
}
