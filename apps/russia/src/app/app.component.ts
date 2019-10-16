import { Component } from '@angular/core';
import { ProductService } from '@heineken/api';
import { Product, ProductConfig } from '@heineken/model';

@Component({
  selector: 'heineken-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'russia';
  
  public products: Product[];
  public productConfig: ProductConfig;

  constructor( private readonly productService: ProductService) {
    this.products = this.productService.getProduct();
    this.productConfig =  new ProductConfig(false, 'theme2');
  }

  public openModal(product) {
    alert(product);
  }
}
