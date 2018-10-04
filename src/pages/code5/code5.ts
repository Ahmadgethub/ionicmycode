import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Locations} from  '../../model/locations';
import { Block2serviceProvider } from '../../providers/block2service/block2service';
import { ContactPage } from '../contact/contact';
// import { IfObservable } from 'rxjs/observable/IfObservable';
// import { Observable } from 'rxjs/observable'
import { AngularFireDatabase , AngularFireObject } from '@angular/fire/database';
// import { Action } from 'rxjs/scheduler/Action';
/**
 * Generated class for the Code5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code5',
  templateUrl: 'code5.html',
})
export class Code5Page {

 giftList : AngularFireObject<any>;

  locations:Locations={
    latitude:'',
    longitude:'', 
    info:''
  };

  itemArry=[];
  myObject=[]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public block2serviceProvider:Block2serviceProvider,
    public alertCtrl: AlertController,
    db: AngularFireDatabase
  ) {
  
    this.giftList = db.object('codemap');
    this.giftList.snapshotChanges().subscribe(action => {
    let y=action.payload.toJSON()
    y['key']=action.key
    this.itemArry.push(action.payload.val() as Locations)
    console.log( this.itemArry )
    this.myObject = Object.entries(this.itemArry[0])
    console.log ( this.myObject )

    });
  }
  //   }
  //   )

  //   .().map(
  //       changes => { 
  //         return changes.map( c => ({
  //           key:c.payload.key , ...c.payload.val()
  //         }))
  //       }
        
      
  //   ) 
  
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Code5Page');
  }

  
  updatelocations(locations:Locations){
     this.block2serviceProvider.updatelocations(locations).then( ()=>{
      console.log('update')

  })
}

  removelocations(locations:Locations){
    this.block2serviceProvider.removelocations(locations).then( ()=>{
      console.log('delete')

    })
}



showPrompt(key , info , latitude , longitude) {
  let prompt = this.alertCtrl.create({
    title: 'التعديل',
    message: "التعديل على المعلومات الحالية",
    inputs: [
      {
        name: 'Info',
        placeholder: info
      },

      {
        name: 'Latitude',
        placeholder: latitude
      },

      {
        name: 'Longitude',
        placeholder: longitude
      },

    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          // console.log('Saved clicked');
          this.locations.info =  data.Info
          this.locations.latitude =  data.Latitude
          this.locations.longitude =  data.Longitude
          this.locations.key = key
          
          console.log(this.locations)
          // this.updatelocations(this.locations)
        }
      }
    ]
  });
  prompt.present();
}






}