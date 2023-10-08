import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 count=0;
 increment = ()=>{
  console.log(`${this.count} is incrementing`);
  this.count+=1;
 }
 decrement = ()=>{
  console.log(`${this.count} is decrementing`);
  if(this.count>0){
    this.count-=1;
  }
 }
}
