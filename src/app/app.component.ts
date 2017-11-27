import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiposDeServico = [
    { nome: 'Tipo de Serviço 01', descricao: 'Descrição para o tipo de serviço 01', valor: 10},
    { nome: 'Tipo de Serviço 02', descricao: 'Descrição para o tipo de serviço 02', valor: 20},
    { nome: 'Tipo de Serviço 03', descricao: 'Descrição para o tipo de serviço 03', valor: 30},
    { nome: 'Tipo de Serviço 04', descricao: 'Descrição para o tipo de serviço 04', valor: 40},
    { nome: 'Tipo de Serviço 05', descricao: 'Descrição para o tipo de serviço 05', valor: 50}
  ];
}
