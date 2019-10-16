import { Component, OnInit } from '@angular/core';
import { Product } from '@heineken/model';
import { ProductService } from '@heineken/api';

@Component({
  selector: 'heineken-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'heineken';
  public products: Product[];

  constructor( private readonly productService: ProductService) {
    this.products = this.productService.getProduct();
  }




}
