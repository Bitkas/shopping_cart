import { Body, Controller, Get, Put } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Product } from './Product.entity';

@Controller('/carts')
export class CartsController {
  constructor(private readonly service: CartsService) {}

  @Get()
  async findAll() {
    let carts = await this.service.findAllCarts();
    return carts;
  }

  @Put('/addProduct')
  addProduct(
    @Body()
    data: {
      productToAdd: Product;
      cartIdToAdd: number;
      userId: number;
    },
  ) {
    this.service.addProductToCart(
      data.productToAdd,
      data.cartIdToAdd,
      data.userId,
    );
    return true;
  }
}
