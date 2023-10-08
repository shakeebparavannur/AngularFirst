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
  count = 0;
  newTaskAdded = false;
    addTask(e:any){
      let newTask = {
        id:this.tasks.length+1,
        task:e
      };
      this.tasks.push(newTask);
      console.log(e);
      this.task = e;
      console.log(this.tasks);
    }
    updateName = (e:any)=>{
      this.name=e.target.value; 
    }
    done = (tas)=>{
      console.log(tas,'clicked');
      this.tasks=this.tasks.filter((t)=>t.id!==tas)
        // console.log(t,"iterated data"); t!==tas;
      
     
    }
    
}
