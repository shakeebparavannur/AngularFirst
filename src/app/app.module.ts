
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningClassComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CounterComponent } from './counter/counter.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { HideandshowComponent } from './hideandshow/hideandshow.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningClassComponent,
    SuccessAlertComponent,
    CounterComponent,
    TaskComponent,
    HideandshowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
