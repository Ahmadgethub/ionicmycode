// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// import { Locations} from  '../../model/locations';
// import { AngularFireDatabase } from '@angular/fire/database';

// /*
//   Generated class for the S1code1Provider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class S1code1Provider {
 
//  private gpsListRef = this.db.list<Locations>('iftarmap')

//   constructor(public db:AngularFireDatabase) {
//     console.log('Hello S1code1Provider Provider');
//   }

//   getLocationList(){
//     return this.gpsListRef;
//   }

//   addLocation(locations:Locations){
//     return this.gpsListRef.push(locations)
//   }

//   updateLocation(locations:Locations){
//     return this.gpsListRef.update(locations.key,locations)
//   }

//   removeLocation(locations){
//     return this.gpsListRef.remove(locations)
//   }

// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locations } from '../../model/locations'
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the S1code1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
 
@Injectable()
export class S1code1Provider {

  private gpsListRef = this.db.list<Locations>('giftmap')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello S1code1Provider Provider'); }

  getLocationList(){
    return this.gpsListRef;
  }
  addLocation(locations:Locations){
    return this.gpsListRef.push(locations)
  }
  updateLocation(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
  }
  removeLocation(locations ){
    return this.gpsListRef.remove(locations )
  }

}