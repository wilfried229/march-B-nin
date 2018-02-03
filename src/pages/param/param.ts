import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-param',
  templateUrl: 'param.html',
})
export class ParamPage {
    testRadioOpen: boolean;
    testRadioResult;
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Choisissez votre marché principal');

    alert.addInput({
      type: 'radio',
      label: 'Akassato',
      value: 'blue',
      checked: true
    });
    alert.addInput({
        type: 'radio',
        label: 'Glo',
        value: 'green',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: 'Zinvié',
        value: 'green',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: 'Dantokpa',
        value: 'green',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: 'Sékou',
        value: 'green',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: 'VEDOKO',
        value: 'green',
        checked: true
      });
      alert.addInput({
        type: 'radio',
        label: 'Cocotomey',
        value: 'green',
        checked: true
      });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
}