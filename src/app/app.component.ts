import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig){
    
  }
  ngOnInit(){
    this.primengConfig.ripple = true;
  }
  
}
