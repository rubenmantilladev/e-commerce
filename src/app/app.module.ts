import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//=> In submodules only:
// imports: [SweetAlert2Module],
