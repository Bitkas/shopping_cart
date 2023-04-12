import { Body, Controller, Get, Put } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Product } from './product.interface';

@Controller('carts')
export class CartsController {
  constructor(private readonly service: CartsService) {}

  @Put()
  addProductCart(
    @Body() body: { id: number; quantity: number; price: number; cart: number },
  ) {
    const product: Product = {
      id: body.id,
      price: body.price,
      quantity: body.quantity,
    };
    return this.service.addProductToCart(product, body.cart);
  }

  @Get()
  findAll() {
    return this.service.findAllCarts();
  }
}
