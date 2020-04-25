import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async showErrorMessage(message) {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showInfoMessage(message) {
    const alert = await this.alertController.create({
      header: 'Info!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showWarningMessage(message) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}