import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heineken-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() price: { salePrice: number, listPrice: number }
  
  constructor() { }

  ngOnInit() {
  }

}
