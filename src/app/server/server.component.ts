import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    // template:`<h2 [class.value]=>".online">demo</h2>`,
    styles:[`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent{
    serverId:number =10;
    serverStatus:string  = 'running';
    public value = true;
    /**
     *
     */
    constructor() {
       this.serverStatus=Math.random()>0.5?'online':'offline';
        
    }
    getServerStatus():string{
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus == 'online' ? 'green' : 'red';
    }

}