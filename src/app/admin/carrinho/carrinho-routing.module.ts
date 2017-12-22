import { Routes } from '@angular/router';

import { CarrinhoComponent } from '../carrinho/carrinho.component'

/**
 * Define as rotas de categoria.
 */
export const CarrinhoRotas: Routes = [
  {
    path: 'carrinho/inserir',
    component: CarrinhoComponent
  },

  {
    path: 'carrinho/remover',
    component: CarrinhoComponent
  }
];
