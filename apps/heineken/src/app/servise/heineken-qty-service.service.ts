import { Injectable } from '@angular/core';
import { IQtyService } from 'libs/ui/src/lib/service/qty.service';

@Injectable({
  providedIn: 'root'
})
export class HeinekenQtyServiceService implements IQtyService {
  addToCart( qty: number): number {
    console.log('HeinekenQtyServiceService add to cart')
    return qty +=0.5;
  }
  remove(): void {
    console.log('HeinekenQtyServiceService remove')
  }

constructor() { }

}
