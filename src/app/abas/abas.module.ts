import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoModule } from '../historico/historico.module';

import { PulpitosComponent } from './pulpitos/pulpitos.component';
import { ProjetoresComponent } from './projetores/projetores.component';
import { BannersComponent } from './banners/banners.component';



@NgModule({
  declarations: [
    PulpitosComponent,
    ProjetoresComponent,
    BannersComponent
  ],
  imports: [
    CommonModule,
    HistoricoModule
  ],
  exports: [
    PulpitosComponent,
    ProjetoresComponent,
    BannersComponent
  ]
})
export class AbasModule { }
