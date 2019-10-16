import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'heineken-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})

export class QuantityComponent implements OnInit {
  @Input() theme: any;

  ngOnInit(): void {
    const t = this;
  }
 
  constructor() {}  
}
