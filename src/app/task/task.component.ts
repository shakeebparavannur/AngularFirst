import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task='initial data';
  name='';
  selectedOption='option1'
  newTaskAdded = false;
    addTask(e:any){
      
      console.log(e.target.value);
      this.task = e.target.value;
    }
    updateName = (e:any)=>{
      this.name=e.target.value;
    }
    
}
