import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../../services/restaurant.service';
import {Restaurant} from '../../../models/restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;

  answer: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {}

  find() {
    this.restaurantService.getRestaurantsByManyOptions(this.search).subscribe(res => {
      this.answer = res;
    });
  }
}
