import { HttpModule, HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private readonly http: HttpService) {}

  async getProducts(): Promise<any> {
    const { data } = await firstValueFrom(
      this.http.get('http://localhost:3000/products'),
    );

    return data;
  }

  async createProduct(price: number) {
    const { data } = await firstValueFrom(
      this.http.post('http://localhost:3000/products', { data: price }),
    );

    return data;
  }
}
