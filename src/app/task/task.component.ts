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
  tasks = [];
  newTaskAdded = false;
    addTask(e:any){
      this.tasks.push(e.target.value);
      console.log(e.target.value);
      this.task = e.target.value;
      console.log();
      
      
    }
    updateName = (e:any)=>{
      this.name=e.target.value;
    }
    
}
