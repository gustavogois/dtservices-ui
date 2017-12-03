import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo-cadastro',
  templateUrl: './processo-cadastro.component.html',
  styleUrls: ['./processo-cadastro.component.css']
})
export class ProcessoCadastroComponent {

    tipoImovel = [
    { label: 'Apartamento', value: 1},
    { label: 'Moradia', value: 2}
  ];


}
