import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuantityComponent } from './components/quantity/quantity.component';
import { ProductComponent } from './components/product/product.component';
import { PriceComponent } from './components/price/price.component';
import {
  Header,
  Footer,
  HeinekenTemplate,
  BaseQuantityComponent
} from './components/common/shared';
import { UiModuleConfig, QTY_SERVICE, QtyService } from './service/qty.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    Header,
    Footer,
    HeinekenTemplate,
    BaseQuantityComponent,
    QuantityComponent,
    ProductComponent,
    PriceComponent
  ],
  exports: [
    Header,
    Footer,
    HeinekenTemplate,
    QuantityComponent,
    BaseQuantityComponent,
    ProductComponent,
    PriceComponent
  ],
  providers: [
    {
      provide: QTY_SERVICE,
      useClass: QtyService
    }
  ]
})
export class UiModule {
}
