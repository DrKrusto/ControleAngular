import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersProviderService } from '../services/characters-provider.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-single-character-details',
  templateUrl: './single-character-details.component.html',
  styleUrls: ['./single-character-details.component.css']
})
export class SingleCharacterDetailsComponent implements OnInit {
  character: Character;

  constructor(private router: ActivatedRoute, private charactersService: CharactersProviderService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.charactersService.subject.subscribe(
      (characters: Character[]) => { this.character = characters.find(char => char.id == id) }
    );
    this.charactersService.emitCharacters();
  }
}