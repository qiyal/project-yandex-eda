import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  getItems() {
    return this.cartService.cart;
  }

  getTotalCost() {
    let cost = 0;

    for (const item of this.cartService.cart) {
      cost += item.item.price * item.q;
    }

    return cost;
  }

}
