import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peca-pesquisa',
  templateUrl: './peca-pesquisa.component.html',
  styleUrls: ['./peca-pesquisa.component.css']
})
export class PecaPesquisaComponent {
  peca = [
    { categoria: 'Pintura', nome: 'Pincel', quantidade: 2, minimo: 1 },
    { categoria: 'Pintura', nome: 'Tinta branca', quantidade: 1, minimo: 2 },
    { categoria: 'Limpeza', nome: 'Vassoura', quantidade: 3, minimo: 1 },
  ];
}
