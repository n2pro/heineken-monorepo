import { Component, Input } from '@angular/core';

@Component({
  selector: 'heineken-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {
  @Input() theme: any;

  constructor() {}
}
