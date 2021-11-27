import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  idUser: any;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.currentUser.then((result)=>{
      this.idUser = result?.uid;
      console.log(this.idUser)
    }); 
  }

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
