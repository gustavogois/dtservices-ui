import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo-pesquisa',
  templateUrl: './processo-pesquisa.component.html',
  styleUrls: ['./processo-pesquisa.component.css']
})
export class ProcessoPesquisaComponent {

  processos = [
    { id: '1', siglaSolicitante: 'ABC', solicitante: 'Solicitante 01', codExterno: 'HYR345AB1', 
      estado: 'Criado', dataLimite: new Date(2018,1,20)},
    { id: '2', siglaSolicitante: 'DEF', solicitante: 'Solicitante 02', codExterno: 'WXY986KL8', 
      estado: 'Em execução', dataLimite: new Date(2017,12,2)},
    { id: '3', siglaSolicitante: 'FGH', solicitante: 'Solicitante 03', codExterno: 'UXM391BB7', 
      estado: 'Finalizado', dataLimite: new Date(2018,3,5)},
  ];

}
