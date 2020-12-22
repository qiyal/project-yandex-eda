import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../../../services/restaurant.service";
import {Restaurant} from "../../../models/restaurant";
import {ItemsService} from "../../../services/items.service";
import {CustomMap} from "../../../models/custom-map";
import {CartService} from "../../../services/cart.service";
import {Item} from "../../../models/item";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  imageUrl = 'url("assets/images/food/card-photo/food1.jpg")';
  tabIndex = 0;
  restaurantId;
  restaurant: Restaurant;
  products: CustomMap[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private itemsService: ItemsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.paramMap.get('id');
    console.log('id res: ' + this.restaurantId);
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(res => {
      this.restaurant = res;

      for (const tag of this.restaurant.productList) {
        const link = `/${tag}`;

        this.itemsService.getItems(this.restaurantId, link).subscribe(resItems => {
          this.products.push(new CustomMap(tag, resItems));
        });
      }

    });
  }

  addToCart(item: Item, api: string) {
    this.cartService.addItem(item, api);
  }
}
