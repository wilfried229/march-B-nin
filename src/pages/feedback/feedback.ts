import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
 

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
   
    todo = {}
    logForm() {
      console.log(this.todo)
    }
  constructor(public navCtrl: NavController) {
     
  }

  
    
    }