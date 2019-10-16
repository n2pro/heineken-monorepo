import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '@heineken/ui';
import { ApiModule } from '@heineken/api';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

@NgModule({
  declarations: [AppComponent, AppLayoutComponent],
  imports: [BrowserModule, UiModule, ApiModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppLayoutComponent]
})
export class AppModule {}
