import { Component, OnInit } from '@angular/core';
import { Product, ProductConfig } from '@heineken/model';
import { ProductService } from '@heineken/api';

@Component({
  selector: 'heineken-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heineken';
  public products: Product[];

  constructor(private readonly productService: ProductService) {
    this.products = this.productService.getProduct();
  }

  public getConfig(index) {
    let theme = 'theme1'
    if (index % 2 == 0)
    {
      theme = 'theme2'
    }
    return new ProductConfig(true,theme );
  }
}
