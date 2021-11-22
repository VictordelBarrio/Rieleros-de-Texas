import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

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
