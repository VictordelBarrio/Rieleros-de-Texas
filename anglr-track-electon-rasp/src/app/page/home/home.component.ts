import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private router:Router, private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    
   }

  ngOnInit(): void {
    
  }

  change(r: string){
    if(r === "track"){
      console.log('Hello from btn');
      this.router.navigate(['/trackBus']);
    } else if (r === "register"){
      console.log('Hello from btn');
      this.router.navigate(['/addRoute']);
    }
  }
}
