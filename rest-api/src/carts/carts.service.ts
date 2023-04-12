import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Product } from './product.interface';

@Injectable()
export class CartsService {
  constructor(private http: HttpService) {}

  async addProductToCart(product: Product, cart: number) {
    const body: {
      data: { productToAdd: Product; cartIdToAdd: number; userId: number };
    } = {
      data: {
        productToAdd: product,
        cartIdToAdd: cart,
        userId: 28740,
      },
    };
    const { data } = await firstValueFrom(
      this.http.put('http://localhost:8000/carts/addProduct', body.data),
    );

    return data;
  }

  async findAllCarts() {
    const { data } = await firstValueFrom(
      this.http.get('http://localhost:8000/carts'),
    );

    return data;
  }
}
