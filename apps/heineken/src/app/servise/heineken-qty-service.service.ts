import { Injectable } from '@angular/core';
import { IQtyService } from 'libs/ui/src/lib/service/qty.service';

@Injectable({
  providedIn: 'root'
})
export class HeinekenQtyServiceService implements IQtyService {
  addToCart(): void {
    console.log('HeinekenQtyServiceService add to cart')
  }
  remove(): void {
    console.log('HeinekenQtyServiceService remove')
  }

constructor() { }

}
