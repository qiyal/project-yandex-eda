import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../../models/restaurant';
import {RestaurantService} from '../../../services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  select: string;
  restaurants: Restaurant[] = [];
  populars: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.select = 'all';
    this.getAllRestaurants();
    this.getPopulars();
  }

  isSelect(select: string): boolean {
    return (select === this.select);
  }

  setSelect(select: string) {

    if (select === 'all') {
      this.getAllRestaurants();
    } else {
      this.getRestaurantByTag(select);
    }

    this.select = select;
  }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.restaurants = res;
    });
  }

  getRestaurantByTag(tag: string) {
    this.restaurantService.getRestaurantByTag(tag).subscribe(res => {
      this.restaurants = res;
    });
  }

  getPopulars() {
    this.restaurantService.getPopulars().subscribe(res => {
      this.populars = res;
    });
  }



}
