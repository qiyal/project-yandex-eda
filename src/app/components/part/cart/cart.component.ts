import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Restaurant} from '../../../models/restaurant';
import {CartMap} from '../../../models/cart-map';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: CartMap[] = [];
  totalCost = 0;
  @Input() restaurant: Restaurant;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {}

  getItems() {
    this.items = this.cartService.cart;
    return this.items;
  }

  getTotalCost() {
    let cost = 0;

    for (const item of this.cartService.cart) {
      cost += item.item.price * item.q;
    }

    this.totalCost = cost;

    return this.totalCost;
  }

  decrement(index: number) {
    if (this.items[index].q === 1) {
      let newItemsArray: CartMap[] = [];

      for (const item of this.items) {
        if (this.items[index] !== item) {
          newItemsArray.push(item);
        }
      }

      this.cartService.cart = newItemsArray;
    } else {
      this.items[index].q--;
      this.cartService.cart = this.items;
    }
  }

  increment(index: number) {
    this.items[index].q++;
    this.cartService.cart = this.items;
  }

  isDisabled() {
    return this.totalCost < this.restaurant.limit;
  }

  doOrder() {
    this.cartService.doOrder();
  }
}
