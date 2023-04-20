import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})


export class StudentsPage implements OnInit {

  students :any[] = [
    { name: "Jenny", age: 22, GPA: 4.0, subjects: ["Math", "Science"], image: "http://www.fcatalog.com/wallpaper/jenny-mccarthy/jenny-mccarthy-73717.jpg"},
    { name: "Carlos", age: 26, GPA: 3.5, subjects: ["Math", "Science", "Reading"], image: "https://i2-prod.mirror.co.uk/incoming/article10338502.ece/ALTERNATES/s615b/SOCCER-Carlos_file-1.jpg" },
    { name: "Willow", age: 18, GPA: 2.6, subjects: ["French", "English"], image:"https://media1.popsugar-assets.com/files/thumbor/ejAZ0UzGQhI0WD6gGjueEXs3aj8/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2016/02/23/805/n/1922283/beae7280dc847189_will/i/Alyson-Hannigan-Willow-Rosenberg.JPG" }
  ]
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetailsWithState(index:number) {
    let navigationExtras: NavigationExtras = {
      state: {
        student: this.students[index]
      }
    };
    this.router.navigate(['student'], navigationExtras);
  }

}
