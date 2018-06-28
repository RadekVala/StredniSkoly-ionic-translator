import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private result:String;

  constructor(public navCtrl: NavController) {

  }

  doTranslation(input){
    this.result = input;
  }

}
