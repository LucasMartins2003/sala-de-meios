import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PulpitosComponent } from './pulpitos/pulpitos.component';
import { ProjetoresComponent } from './projetores/projetores.component';
import { BannersComponent } from './banners/banners.component';
import { HistoricoComponent } from './historico/historico.component';



@NgModule({
  declarations: [
    PulpitosComponent,
    ProjetoresComponent,
    BannersComponent,
    HistoricoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PulpitosComponent,
    ProjetoresComponent,
    BannersComponent
  ]
})
export class AbasModule { }
