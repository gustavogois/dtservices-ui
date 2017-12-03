import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';

import { AppComponent } from './app.component';
import { TiposdeservicoPesquisaComponent } from './tiposdeservico-pesquisa/tiposdeservico-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TipodeservicoCadastroComponent } from './tipodeservico-cadastro/tipodeservico-cadastro.component';
import { PecaPesquisaComponent } from './peca-pesquisa/peca-pesquisa.component';
import { PecaCadastroComponent } from './peca-cadastro/peca-cadastro.component';
import { SolicitantePesquisaComponent } from './solicitante-pesquisa/solicitante-pesquisa.component';
import { SolicitanteCadastroComponent } from './solicitante-cadastro/solicitante-cadastro.component';
import { ProcessoPesquisaComponent } from './processo-pesquisa/processo-pesquisa.component';
import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';
import { ServicoPesquisaComponent } from './servico-pesquisa/servico-pesquisa.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    TiposdeservicoPesquisaComponent,
    NavbarComponent,
    TipodeservicoCadastroComponent,
    PecaPesquisaComponent,
    PecaCadastroComponent,
    SolicitantePesquisaComponent,
    SolicitanteCadastroComponent,
    ProcessoPesquisaComponent,
    ProcessoCadastroComponent,
    ServicoPesquisaComponent,
    ServicoCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    TabViewModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
