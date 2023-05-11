import { Component } from '@angular/core';
import { Character } from './models/character';
import { CharactersProviderService } from './services/characters-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalEro';
  constructor(public charactersService: CharactersProviderService, public router: Router) {
    this.router.navigate(["/characters"]);
  }
}
