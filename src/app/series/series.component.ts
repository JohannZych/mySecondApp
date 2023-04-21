import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {

  series: string[] = [
    'Friends', 'K-2000', 'Magnum', 'Columbo', 'Starsky et Hutch', 'Shérif fais moi peur'
  ];

  user: User = new User('John', 'Doe', 27, 'assets/731_java.jpg', 122, false);
  ngOnInit() {

  }
  toggleAdmin()
  {
    this.user.isAdmin = !this.user.isAdmin;
  }
}
