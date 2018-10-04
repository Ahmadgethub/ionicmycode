import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { Locations} from  '../../model/locations';
import { Block2serviceProvider } from '../../providers/block2service/block2service';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the Code4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code4',
  templateUrl: 'code4.html',
})
export class Code4Page {

  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public block2serviceProvider:Block2serviceProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Code4Page');
  }
  
  addlocations(locations:Locations){
    this.block2serviceProvider.addlocations(locations).then(ref =>{
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
