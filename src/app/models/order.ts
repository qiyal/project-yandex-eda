import {InOrderItem} from './in-order-item';

export class Order {
  constructor(
    public id: number,
    public customersId: number,
    public date: Date,
    public items: InOrderItem[],
    public cost: number
  ) {}
}
