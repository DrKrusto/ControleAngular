import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Subject } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class CharactersProviderService {
  private characters: Character[] = [
    { id: 1, name: "Ulysse", karma: "good" },
    { id: 2, name: "Cyrano", karma: "bad" },
    { id: 3, name: "Milady", karma: "good" }
  ];

  subject = new Subject<Character[]>();

  emitCharacters() {
    this.subject.next(this.characters);
  }

  constructor() { }
}
