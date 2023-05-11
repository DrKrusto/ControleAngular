import { Component } from '@angular/core';
import { Character } from './models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalEro';

  characters: Character[] = [
    { id: 1, name: "Ulysse", karma: "good" },
    { id: 2, name: "Cyrano", karma: "bad" },
    { id: 3, name: "Milady", karma: "good" }
  ];

  constructor() { }
}
