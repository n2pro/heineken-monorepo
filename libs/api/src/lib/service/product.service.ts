import { Injectable } from '@angular/core';
import { Product } from '@heineken/model';
import { productsMock } from '@heineken/shared/mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  public getProduct(): Product[] {
    return productsMock;
  }
}
