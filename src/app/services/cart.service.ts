import { Injectable } from '@angular/core';
import {Item} from "../models/item";
import {CartMap} from '../models/cart-map';
import {Order} from '../models/order';
import {ItemQMap} from '../models/item-q-map';
import {OrderService} from './order.service';
import {Router} from '@angular/router';
import {InOrderItem} from '../models/in-order-item';

@Injectable()
export class CartService {
  cart: CartMap[] = [];

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  addItem(newItem: Item, api: string) {
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
      this.cart.push(new CartMap(newItem, 1, api));
    }
  }

  clearCart() {
    this.cart = [];
  }

  getTotalCost() {
    let cost = 0;

    for (const item of this.cart) {
      cost += item.item.price * item.q;
    }

    return cost;
  }

  doOrder() {
    const userId = +localStorage.getItem('userId');
    const totalCost = this.getTotalCost();
    let itemQmap: InOrderItem[] = [];

    for (const item of this.cart) {
      itemQmap.push(new InOrderItem(item.item.name, item.q, item.item.price));
    }

    const newOrder = new Order(null, userId, new Date(), itemQmap, totalCost);

    this.orderService.postOrder(newOrder).subscribe(res => {
      this.clearCart();
      this.router.navigate(['/me/order-history']);
    });
  }
}
