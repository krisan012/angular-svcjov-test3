import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  cards = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 20,
      gender: 'Male',
      telephone: '+299999',
      duplicates: 0 //for tracking duplicate count
    }
  ];

  constructor(private http: HttpClient) {}

  duplicateCard(card: any): void{
    console.log('duplicate');
    const newCard = { ...card, duplicates: 0 };
    newCard.name = `${card.name}#${card.duplicates + 1}`; //new name of duplicated card
    card.duplicates++; //increase duplicate count

    this.cards.push(newCard);
  }
}
