import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMobileModalPageRoutingModule } from './register-mobile-modal-routing.module';

import { RegisterMobileModalPage } from './register-mobile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMobileModalPageRoutingModule
  ],
  declarations: [RegisterMobileModalPage]
})
export class RegisterMobileModalPageModule {}
