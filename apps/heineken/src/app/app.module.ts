import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '@heineken/ui';
import { ApiModule } from '@heineken/api';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { QTY_SERVICE } from 'libs/ui/src/lib/service/qty.service';
import { HeinekenQtyServiceService } from 'apps/heineken/src/app/servise/heineken-qty-service.service';

@NgModule({
  declarations: [AppComponent, AppLayoutComponent],
  imports: [BrowserModule, UiModule, ApiModule],
  providers: [
    {
      provide: QTY_SERVICE,
      useClass: HeinekenQtyServiceService
    }
  ],
  bootstrap: [AppComponent],
  exports: [AppLayoutComponent]
})
export class AppModule {}
