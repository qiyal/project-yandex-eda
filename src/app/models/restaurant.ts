export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public limit: number,
    public freeDeliveryValue: number,
    public deliverValue: number,
    public rating: number,
    public productList: string[]
  ) {}
}
