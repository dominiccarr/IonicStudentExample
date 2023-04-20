import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})


export class StudentsPage implements OnInit {

  students :any[] = [
    { name: "Jenny", age: 22, GPA: 4.0, subjects: ["Math", "Science"]},
    { name: "Carlos", age: 26, GPA: 3.5, subjects: ["Math", "Science", "Reading"] },
    { name: "Willow", age: 18, GPA: 2.6, subjects: ["French", "English"] }
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
