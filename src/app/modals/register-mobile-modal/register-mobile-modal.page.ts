import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register-mobile-modal',
  templateUrl: './register-mobile-modal.page.html',
  styleUrls: ['./register-mobile-modal.page.scss'],
})
export class RegisterMobileModalPage implements OnInit {

  constructor(public modalCtrl : ModalController) { }

  ngOnInit() {
  }

  onPositiveClick(){
      this.modalCtrl.dismiss();
  }

}
