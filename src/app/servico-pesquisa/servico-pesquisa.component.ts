import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-pesquisa',
  templateUrl: './servico-pesquisa.component.html',
  styleUrls: ['./servico-pesquisa.component.css']
})
export class ServicoPesquisaComponent {

  servicos = [
    { tipo: 'Arrombamento de porta', valor: 20, observacoes: 'Porta simples.', 
      estado: 'Finalizado'},
    { tipo: 'Pintura', valor: 150, observacoes: 'Sala e quartos', 
      estado: 'Em andamento'},
    { tipo: 'Trocar portão', valor: 50, observacoes: '', 
      estado: 'Criado'}
  ];


}
