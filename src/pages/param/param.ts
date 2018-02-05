import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-param',
  templateUrl: 'param.html',
})
export class ParamPage {
    testRadioOpen: boolean;
    testRadioResult: string;
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Choisissez votre marché principal');

    alert.addInput({
      type: 'radio',
      label: 'Akassato',
      value: 'Akassato',
      checked: false
    });
    alert.addInput({
        type: 'radio',
        label: 'Glo',
        value: 'Glo',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Zinvié',
        value: 'Zinvié',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Dantokpa',
        value: 'Dantokpa',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Sékou',
        value: 'Sékou',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'VEDOKO',
        value: 'VEDOKO',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Cocotomey',
        value: 'Cocotomey',
        checked: false
      });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data  
        console.log(" j'ai selectionné " + this.testRadioResult);
      }
    });
    alert.present();
  }
}