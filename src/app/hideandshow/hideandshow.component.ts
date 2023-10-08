import { Component } from '@angular/core';

@Component({
  selector: 'app-hideandshow',
  templateUrl: './hideandshow.component.html',
  styleUrls: ['./hideandshow.component.css']
})
export class HideandshowComponent {
  showSecret = false
  log = []
  onToggleDisplay = () => {
    this.showSecret = !this.showSecret
    this.log.push(this.log.length+1)
  }
}
