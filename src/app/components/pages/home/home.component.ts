import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../../models/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  select: string;
  search: string;
  restaurants: Restaurant[] = [];
  sales: Restaurant[] = [];

  constructor() { }

  ngOnInit(): void {
    this.select = 'all';
    this.getRestaurants();
    this.getSales();
  }

  isSelect(select: string): boolean {
    return (select === this.select);
  }

  setSelect(select: string) {
    this.select = select;
  }

  getRestaurants() {
    // this.restaurants.push(new Restaurant('Nori', 4.8));
    // this.restaurants.push(new Restaurant('Propizza', 4.8));
    // this.restaurants.push(new Restaurant('Coffeessimo', 4.8));
    // this.restaurants.push(new Restaurant('Nori', 4.8));
    // this.restaurants.push(new Restaurant('Propizza', 4.8));
    // this.restaurants.push(new Restaurant('Coffeessimo', 4.8));
  }

  getSales() {
    // this.sales.push(new Restaurant('Nori - 1', 4.8));
    // this.sales.push(new Restaurant('Propizza - 2', 4.8));
    // this.sales.push(new Restaurant('Coffeessimo -3', 4.8));
    // this.sales.push(new Restaurant('Nori - 4', 4.8));
    // this.sales.push(new Restaurant('Propizza - 5', 4.8));
    // this.sales.push(new Restaurant('Coffeessimo -6', 4.8));
  }

}
