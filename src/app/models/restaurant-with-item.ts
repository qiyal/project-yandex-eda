import {Restaurant} from './restaurant';
import {Item} from './item';

export class RestaurantWithItem {
  constructor(
    private restaurant: Restaurant,
    private items: Item[]
  ) {}
}
