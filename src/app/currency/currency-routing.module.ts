import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyPage } from './currency.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyPageRoutingModule {}
