import { Component, Input, Inject } from '@angular/core';
import { BaseQuantityComponent } from 'libs/ui/src/lib/components/common/shared';
import { QTY_SERVICE, IQtyService } from 'libs/ui/src/lib/service/qty.service';

@Component({
  selector: 'heineken-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})

export class QuantityComponent extends BaseQuantityComponent {
  constructor(@Inject(QTY_SERVICE) private readonly libService: IQtyService) {
    super();
  }
  public qty = 0;

  public add() {
    this.qty += 1
    this.libService.addToCart();
  }

  public remove() {
    this.qty = 0;
    this.libService.remove();
  }

}
