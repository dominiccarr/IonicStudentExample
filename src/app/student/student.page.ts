import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  student : any = { name: "Willow", age: 18, GPA: 2.6, subjects: ["French", "English"] }

  constructor(private alertController: AlertController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router?.getCurrentNavigation()?.extras.state) {
        this.student = this.router?.getCurrentNavigation()?.extras?.state?.["student"];
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: this.student.name + 'is a great student!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
