import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html'
})
export class EventPage implements OnInit {

  event : any
  eventNote: string = ""

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router?.getCurrentNavigation()?.extras.state) {
        this.event = this.router?.getCurrentNavigation()?.extras?.state?.["event"];
        var savedNote: any = localStorage.getItem(this.event.name);
        if (savedNote != null){
          this.eventNote = savedNote;
        }
      }
    });

    
  }

  onChangeTime(){
    localStorage.setItem(this.event.name, this.eventNote);
  }

  ngOnInit() {
  }

}
