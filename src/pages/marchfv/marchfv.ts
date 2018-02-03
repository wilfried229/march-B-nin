import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 

@Component({
  selector: 'page-marchfv',
  templateUrl: 'marchfv.html',
})
export class MarchfvPage {

  

  constructor(public navCtrl: NavController ) {

  }
   private showDelete() {
    this.navCtrl.push(MarchfvPage);
   }

}
