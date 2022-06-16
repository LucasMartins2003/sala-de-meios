import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbasModule } from './abas/abas.module'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
