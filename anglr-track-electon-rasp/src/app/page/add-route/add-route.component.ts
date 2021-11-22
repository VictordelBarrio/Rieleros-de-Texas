import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RegRouteService } from 'src/app/services/reg-route.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {

  routeForm: FormGroup;
  id: number = 0;
  lat: number = 0;
  long: number = 0;
  prelat: number = 1;
  prelong: number = 1;
  interval: any;
  

  constructor(private regService: RegRouteService, private router: Router) { 
    this.routeForm = new FormGroup({
      'name' : new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addCoords(){
    if(this.lat !== this.prelat || this.long !== this.prelong){
      this.lat = this.lat +1;//this is only for testng lat should be from arduino
      this.long = this.long + 1;
      this.id = this.id + 1;
      this.regService.newRouteCoords(String(this.id), this.lat, this.long, this.routeForm.value.name);
      this.prelat = this.lat+1;//this is only for testng lat should be from arduino
      this.prelong = this.long+1;
    }
  }

  createRoute(){
    if(this.routeForm.invalid){
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


