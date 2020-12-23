import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {RestaurantComponent} from "../../components/pages/restaurant/restaurant.component";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FoodCardComponent} from "../../components/part/food-card/food-card.component";
import {CartService} from "../../services/cart.service";
import {ItemsService} from "../../services/items.service";
import {CartComponent} from "../../components/part/cart/cart.component";
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    RestaurantComponent,
    FoodCardComponent,
    CartComponent
  ],
    imports: [
        CommonModule,
        RestaurantRoutingModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
  providers: [
    CartService,
    ItemsService
  ]
})
export class RestaurantModule { }
