import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //element selector
  // selector: '[app-servers]', attribute selector
  // selector:'.app-servers', // class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer:boolean =true;
  servers = [];
  constructor(){
    setTimeout(() =>{
      this.allowNewServer = false;
    },2000)
  }
  }

