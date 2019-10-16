import { Component, OnInit, ContentChild } from '@angular/core';
import { Header, Footer } from 'libs/ui/src/lib/components/common/shared';

@Component({
  selector: 'heineken-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @ContentChild(Header, { static: false }) productHeader;
  @ContentChild(Footer, { static: false }) productFooter;
  constructor() { }
  ngOnInit() {
  }
}
