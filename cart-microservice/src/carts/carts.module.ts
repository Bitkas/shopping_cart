import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './Cart.entity';
import { Product } from './Product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Product])],
  providers: [CartsService],
  controllers: [CartsController],
})
export class CartsModule {}
