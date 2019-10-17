import { Injectable, InjectionToken, Type } from '@angular/core';

export interface IQtyService {
  addToCart(qty: number): number
  remove(): void;
}

export const QTY_SERVICE = new InjectionToken<IQtyService>('QTY_SERVICE');

export interface UiModuleConfig {
  service: Type<IQtyService>;
}

@Injectable()
export class QtyService implements IQtyService {
  constructor() {}

  public remove(): void {
    console.log('UiModule QtyService remove');
  }
  public addToCart(qty: number): number {
    console.log(' UiModule QtyService addToCart');
    return qty += 1;
  }
}
