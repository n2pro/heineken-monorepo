import { Component } from '@angular/core';
import { ProductService } from '@heineken/api';
import { Product } from '@heineken/model';

@Component({
  selector: 'heineken-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'russia';
  
  public products: Product[];

  constructor( private readonly productService: ProductService) {
    this.products = this.productService.getProduct();
  }
}
