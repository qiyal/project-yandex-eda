export class Item {
  constructor(
    public id: number,
    public restaurantId: number,
    public name: string,
    public mass: number,
    public value: string,
    public price: number,
    public description: string,
    public imageUrl: string
  ) {}
}
