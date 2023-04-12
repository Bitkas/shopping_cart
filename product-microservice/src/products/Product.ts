export class Product {
  productId: string;
  price: number;
  static id: number = 0;

  constructor(price: number) {
    let productId: number = ++Product.id;
    this.productId = productId.toString();
    this.price = price;
  }
}
