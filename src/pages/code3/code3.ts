import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { Locations} from  '../../model/locations';
import {S1code1Provider} from '../../providers/s1code1/s1code1'
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the Code3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code3',
  templateUrl: 'code3.html',
})
export class Code3Page {

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public s1code1Provider: S1code1Provider,
     public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Code3Page');
  }

  addlocations(locations:Locations){
    this.s1code1Provider.addlocations(locations).then(ref =>{
    this.showAlert()
    this.navCtrl.pop()

    })
  }




  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: ' just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }



}
