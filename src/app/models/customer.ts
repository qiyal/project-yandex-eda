export class Customer {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public genre: string,
    public cashBack: number,
    public urlAvatar: string
  ) {
  }
}
