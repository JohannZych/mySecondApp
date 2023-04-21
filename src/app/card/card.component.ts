import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  quote = '';

  user: User = new User('John', 'Doe', 27, 'assets/731_java.jpg', 122, false);

  ngOnInit(){

  }

  alertMessage(): void {
    alert('Bien joué');
  }
}
