import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitante-pesquisa',
  templateUrl: './solicitante-pesquisa.component.html',
  styleUrls: ['./solicitante-pesquisa.component.css']
})
export class SolicitantePesquisaComponent {
  solicitantes = [
    { id: '1', sigla: 'ABC', nome: 'Solicitante 01', entFaturacao: 'Entidade de Faturação 01', nif: '111222333', telefone: '999666444'},
    { id: '2', sigla: 'CDE', nome: 'Solicitante 02', entFaturacao: 'Entidade de Faturação 02', nif: '444555666', telefone: '999555333'},
    { id: '3', sigla: 'FGH', nome: 'Solicitante 03', entFaturacao: 'Entidade de Faturação 03', nif: '222777999', telefone: '999888222'}
  ];
}
