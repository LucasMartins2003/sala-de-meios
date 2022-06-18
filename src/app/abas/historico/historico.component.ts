import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  
  constructor(tipoMaterial:String) {
    interface material {
      id:Number,
      nome:String,
      cauteladoPor:String,
      cauteladoPara:String,
      dataCautela:Date
    }
    switch (tipoMaterial) {
      case "pulpitos":
        break;
      case "banners":
        break;
      case "projetores":
        break;
      default:
        break;
    }
   }

  ngOnInit(): void {
  }

}
