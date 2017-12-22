import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {CarrinhoComponent} from '../carrinho/carrinho.component';
import {CarrinhoService} from '../carrinho/carrinho.service';

@NgModule({
    imports: [
      HttpModule,
      FormsModule,
      CommonModule,
      RouterModule
    ],
    declarations: [
      CarrinhoComponent
    ],
    providers: [
      CarrinhoService
    ]
  })
  export class CarrinhoModule { }
  