import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RestaurantComponent} from "../../components/pages/restaurant/restaurant.component";

const restaurantRoutes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(restaurantRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RestaurantRoutingModule { }
