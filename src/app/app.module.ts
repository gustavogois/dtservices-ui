import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';

import { AppComponent } from './app.component';
import { TiposdeservicoPesquisaComponent } from './tiposdeservico-pesquisa/tiposdeservico-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TipodeservicoCadastroComponent } from './tipodeservico-cadastro/tipodeservico-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    TiposdeservicoPesquisaComponent,
    NavbarComponent,
    TipodeservicoCadastroComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
