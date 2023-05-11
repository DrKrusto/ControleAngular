import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharactersProviderService } from '../services/characters-provider.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  characters: Character[];

  reverseKarma(character: Character) {
    const invertedKarma = character.karma == 'good' ? 'bad' : 'good';
    character.karma = invertedKarma;
  }

  constructor(public charactersService: CharactersProviderService) { }

  ngOnInit(): void {
    this.charactersService.subject.subscribe(
      (characters: Character[]) => { this.characters = characters }
    );
    this.charactersService.emitCharacters();
  }
}
