import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  eventList = [
    {name: "Sports Day", date: "Tomorrow", info:"There will be lots of games"},
    {name: "ATU Global Event", date: "Today", info:"There will be lots of food!"}
  ]
  constructor(private router: Router) {}

  openDetailsWithState(index:number) {
    let navigationExtras: NavigationExtras = {
      state: {
        event: this.eventList[index]
      }
    };
    this.router.navigate(['event'], navigationExtras);
  }

}
