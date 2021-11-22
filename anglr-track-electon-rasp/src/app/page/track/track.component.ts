import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  locForm: FormGroup;
  //idBus: string; this should have the id of the bus
  lat: number = 0;
  long: number = 0;
  interval: any;

  constructor(private router: Router, private trackServ: TrackService ) {
    this.locForm = new FormGroup({
      'name' : new FormControl('', [Validators.required])
    });
   }


  ngOnInit(): void {
  }

  ngOnDestroy(){
    
  }

  addCoords(){
      this.lat = this.lat +1;//this is only for testng lat should be from arduino
      this.long = this.long + 1;
      this.trackServ.saveBusLocation(this.lat, this.long, this.locForm.value.name);
  }

  startTracking(){
    if(this.locForm.invalid){
      return
    }


    this.interval = setInterval(()=> {
      console.log("hello from create function");
      this.addCoords();
    }, 1000);
  }

  stop(){
    clearInterval(this.interval);
    console.log("stopped");
  }

  goHome(){
    this.router.navigate(['/home']);
    //this.ngOnDestroy();
  }

}


