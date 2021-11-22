import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private afs: AngularFirestore) { }

  saveBusLocation(lat: number, long: number, routeName: string): Promise<any> {
    return this.afs.collection('/locationBus').doc('TacoBus').collection('/listRoutes').doc(routeName)
      .set({
        lat: lat,
        long: long
      })
      .then(()=>{
        console.log("inserted corretly.")
      })
      .catch(error => {
        console.log('newCoord save error...');
        console.log('error code', error.code);
        console.log('error', error);
      })
  }
}
