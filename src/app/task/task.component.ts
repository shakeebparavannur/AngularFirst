import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task='initial data';
  selectedOption='option1'
    addTask(e:any){
      console.log(e.target.value);
      this.task = e.target.value;
    }
}
