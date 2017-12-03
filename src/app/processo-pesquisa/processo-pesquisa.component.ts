import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo-pesquisa',
  templateUrl: './processo-pesquisa.component.html',
  styleUrls: ['./processo-pesquisa.component.css']
})
export class ProcessoPesquisaComponent {

  processos = [
    { id: '1', siglaSolicitante: 'ABC', solicitante: 'Solicitante 01', codExterno: 'WXY345AB1', 
      estado: 'Criado', dataLimite: new Date(2018,1,20)},
  ];

  teste() {
    return 'olá!';
  }

}
