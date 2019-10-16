import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './components/quantity/quantity.component';
import { ProductComponent } from './components/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { Header, Footer, HeinekenTemplate } from './components/common/shared';

@NgModule({
  imports: [CommonModule],
  declarations: [Header, Footer, HeinekenTemplate, QuantityComponent, ProductComponent, PriceComponent],
  exports: [Header, Footer, HeinekenTemplate, QuantityComponent, ProductComponent, PriceComponent]
})
export class UiModule {}
