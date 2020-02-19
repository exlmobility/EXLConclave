import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMobileModalPage } from './register-mobile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterMobileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMobileModalPageRoutingModule {}
