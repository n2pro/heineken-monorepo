import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Header, Footer } from 'libs/ui/src/lib/components/common/shared';
import { Product, ProductConfig } from '@heineken/model';

@Component({
  selector: 'heineken-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ContentChild(Header, { static: false }) productHeader;
  @ContentChild(Footer, { static: false }) productFooter;

  @Input() product: Product;
  @Input() productConfig: ProductConfig

  constructor() {}

  public ngOnInit(): void {
    this.productConfig = this.productConfig || new ProductConfig();
  }
}
