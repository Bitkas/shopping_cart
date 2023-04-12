import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, InsertResult, Repository } from 'typeorm';
import { Cart } from './Cart.entity';
import { Product } from './Product.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart) private cartsRepository: Repository<Cart>,
  ) {}

  async findAllCarts() {
    return await this.cartsRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.products', 'products')
      .getMany();
  }
  async addProductToCart(
    product: Product,
    cart: number,
    userId: number,
  ): Promise<Cart | void> {
    const parentEntity = await this.cartsRepository.findOneBy({
      id: cart,
    });
    if (parentEntity === null) {
      const newCart = new Cart(userId, product.price, product.quantity);
      const newProduct = new Product(product.price, product.quantity);
      newCart.products = [product];
      return await this.cartsRepository
        .createQueryBuilder()
        .relation(Cart, 'products')
        .of(newCart)
        .add(newProduct);
    }
    parentEntity.products.push(product);
    parentEntity.totalQuantity += product.quantity;
    parentEntity.totalPrice += product.price;
    return await this.cartsRepository.save(parentEntity);
  }
}
