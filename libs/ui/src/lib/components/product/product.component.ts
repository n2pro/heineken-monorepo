import { Component, ContentChild, Input } from '@angular/core';
import { Header, Footer } from 'libs/ui/src/lib/components/common/shared';
import { Product } from '@heineken/model';

@Component({
  selector: 'heineken-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @ContentChild(Header, { static: false }) productHeader;
  @ContentChild(Footer, { static: false }) productFooter;

  @Input() product: Product;

  constructor() {}
}
