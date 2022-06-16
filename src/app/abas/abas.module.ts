import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PulpitosComponent } from './pulpitos/pulpitos.component';
import { ProjetoresComponent } from './projetores/projetores.component';



@NgModule({
  declarations: [
    PulpitosComponent,
    ProjetoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PulpitosComponent
  ]
})
export class AbasModule { }
