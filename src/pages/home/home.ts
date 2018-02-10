import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController) {

  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Options',
      buttons: [
        {
          text: 'Ajouter aux favoris',
          role: 'Favorite',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Autres',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: ' Pécédemment 15 février 2015',
      duration: 3000
    });
    toast.present();
  }
}
