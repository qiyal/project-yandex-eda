import { Component, OnInit } from '@angular/core';
import {Order} from '../../../../models/order';
import {OrderService} from '../../../../services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    const userId = +localStorage.getItem('userId');

    this.orderService.getAllUserOrders(userId).subscribe(res => {
      this.orders = res;
    });
  }

}
