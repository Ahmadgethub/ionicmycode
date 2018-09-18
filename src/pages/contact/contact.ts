import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Code3Page } from '../code3/code3';
import { Code4Page } from '../code4/code4';
import { Code5Page } from '../code5/code5';
import { Code6Page } from '../code6/code6';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

goToPush1(){
  this.navCtrl.push(Code3Page)
  console.log('goToPush1')
}

goToPush2(){
  this.navCtrl.push(Code4Page)
  console.log('goToPush2')
}

goToPush3(){
  this.navCtrl.push(Code5Page)
  console.log('goToPush3')
}

goToPush4(){
  this.navCtrl.push(Code6Page)
  console.log('goToPush4')
}




}
