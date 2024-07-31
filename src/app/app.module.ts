import { LOCALE_ID, NgModule, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from './products/products.module';

//CONFIGURACION LOCAL DE LA APP
import localeEsBO from '@angular/common/locales/es-BO'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';

registerLocaleData ( localeEsBO );
registerLocaleData ( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductsModule,
],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-BO'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
