import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Locations} from  '../../model/locations';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the Block2serviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Block2serviceProvider {

  private gpsListRef = this.db.list<Locations>('code4map')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello S1code1Provider Provider');
  }

  getlocationsList(){
    return this.gpsListRef;
  }

  addlocations(locations:Locations){
    return this.gpsListRef.push(locations)
  }

  updatelocations(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
  }

  removelocations(locations:Locations){
    return this.gpsListRef.remove(locations.key)
  }


}
