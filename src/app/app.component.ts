import { Component } from '@angular/core';
import { Character } from './models/character';
import { CharactersProviderService } from './services/characters-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalEro';

  constructor(public charactersService: CharactersProviderService) { }
}
