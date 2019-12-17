import { Component } from '@angular/core';
import { NavController, ModalOptions, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private modalController: ModalController
  ) {

  }

  openModal() {
    console.log("openModal");
    let options: ModalOptions = {
      showBackdrop: false,
      enableBackdropDismiss: false,
      enterAnimation: "modal-from-bottom-enter",
      leaveAnimation: "modal-from-bottom-leave"
    };
    let data: any = 0;
    let modalPage = this.modalController.create(
      ModalPage,
      data,
      options);
    modalPage.onDidDismiss(data => {
      console.log("modalDismiss");
    })
    modalPage.present();
    setTimeout(() => {
      modalPage.dismiss();
    }, 10000);
  }
}
