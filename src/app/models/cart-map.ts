import {Item} from './item';

export class CartMap{
  constructor(
    public item: Item,
    public q: number,
    public api: string
  ) {}
}
