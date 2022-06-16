import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PulpitosComponent } from './pulpitos/pulpitos.component';



@NgModule({
  declarations: [
    PulpitosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PulpitosComponent
  ]
})
export class AbasModule { }
