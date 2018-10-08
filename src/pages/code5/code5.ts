// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Locations} from  '../../model/locations';
// import { Block2serviceProvider } from '../../providers/block2service/block2service';
// import { ContactPage } from '../contact/contact';
// // import { IfObservable } from 'rxjs/observable/IfObservable';
// // import { Observable } from 'rxjs/observable'
// import { AngularFireDatabase , AngularFireObject } from '@angular/fire/database';
// // import { Action } from 'rxjs/scheduler/Action';
// /**
//  * Generated class for the Code5Page page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-code5',
//   templateUrl: 'code5.html',
// })
// export class Code5Page {

//  giftList : AngularFireObject<any>;

//   locations:Locations={
//     latitude:'',
//     longitude:'', 
//     info:''
//   };

//   itemArry=[];
//   myObject=[]

//   constructor(public navCtrl: NavController, 
//     public navParams: NavParams,
//     public block2serviceProvider:Block2serviceProvider,
//     public alertCtrl: AlertController,
//     db: AngularFireDatabase
//   ) {
  
//     this.giftList = db.object('codemap');
//     this.giftList.snapshotChanges().subscribe(action => {
//     if (action.payload.val() == null || action.payload.val() == undefined) {
//       console.log('no data')
//     } else {

//     this.itemArry.push(action.payload.val() as Locations)
//     console.log( this.itemArry )
//     this.myObject = Object.entries(this.itemArry[0])
//     console.log ( 'myObject: '+ this.myObject )
//     }
//     });
//   }
//   //   }
//   //   )

//   //   .().map(
//   //       changes => { 
//   //         return changes.map( c => ({
//   //           key:c.payload.key , ...c.payload.val()
//   //         }))
//   //       }
        
      
//   //   ) 
  
//   // }


//   ionViewDidLoad() {
//     console.log('ionViewDidLoad Code5Page');
//   }

  
//   updateLocation(Locations:Locations){
//      this.block2serviceProvider.updateLocation(locations).then( ()=>{
//       this.navCtrl.setRoot(ContactPage) 
//       console.log('update')

//   })
// }

//   removeLocation(locations:Locations){
//     this.block2serviceProvider.removeLocation(locations).then( ()=>{
//       this.navCtrl.setRoot(ContactPage) 

//       console.log('delete')

//     })
//     console.log(locations)
// }



// showPrompt(key , info , latitude , longitude) {
//   let prompt = this.alertCtrl.create({
//     title: 'التعديل',
//     message: "التعديل على المعلومات الحالية",
//     inputs: [
//       {
//         name: 'Info',
//         value: info
//       },

//       {
//         name: 'Latitude',
//         value: latitude
//       },

//       {
//         name: 'Longitude',
//         value: longitude
//       },

//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         handler: data => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Save',
//         handler: data => {
//           // console.log('Saved clicked');
//           this.locations.info =  data.Info
//           this.locations.latitude =  data.Latitude
//           this.locations.longitude =  data.Longitude
//           this.locations.key = key
          
//           console.log(this.locations)
//           this.updatelocations(this.locations)
//         }
//       }
//     ]
//   });
//   prompt.present();
// }


// }


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { S1code1Provider } from '../../providers/s1code1/s1code1';
import { Locations } from '../../model/locations'
import { AngularFireDatabase , AngularFireObject } from '@angular/fire/database';
import { ContactPage } from '../contact/contact';
/**
 * Generated class for the IftarplacemodifyPage page.
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


 iftarList: AngularFireObject<any>;
   
  locations: Locations = {
    key : '',
    latitude: '',
    longitude: '',
    info: ''
  };

  itemArray=[];
  myObject = []

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public s1code1Provider: S1code1Provider,
    db: AngularFireDatabase
  
  ) {
    this.iftarList = db.object('iftarmap');
      this.iftarList.snapshotChanges().subscribe(action => {
        
        if (action.payload.val() == null || action.payload.val() == undefined ) {
          console.log('no data' )
        } else {

        this.itemArray.push(action.payload.val() )
        this.myObject = Object.entries(this.itemArray[0])
   
        }  });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Code5Page');
  }



  updateLocation(locations:Locations){
    this.s1code1Provider.updateLocation(locations ).then( ()=>{
     this.navCtrl.setRoot(ContactPage)
     console.log('updated')
    })
 }
 removeLocation(locations:Locations){
   this.s1code1Provider.removeLocation(locations ).then( ()=>{
     this.navCtrl.setRoot(ContactPage)
     console.log('deleted')
   })
   console.log(locations)

   
 }





 showPrompt( key , info , latitude , longitude ) {
  let prompt = this.alertCtrl.create({
    title: 'تعديل',
    message: "التعديل على المعلومات الحالية ",
    inputs: [
      {
        name: 'Info',
        value:  info
      },
      {
        name: 'Latitude',
        value:  latitude
      },
      {
        name: 'Longitude',
        value:  longitude
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
         this.locations.info =   data.Info
         this.locations.latitude =   data.Latitude
         this.locations.longitude =   data.Longitude
         this.locations.key =  key

         console.log(this.locations)
         this.updateLocation(this.locations)
        }
      }
    ]
  });
  prompt.present();
}







}