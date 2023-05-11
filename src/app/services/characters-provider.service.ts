import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersProviderService {
  characters: Character[] = [
    { id: 1, name: "Ulysse", karma: "good" },
    { id: 2, name: "Cyrano", karma: "bad" },
    { id: 3, name: "Milady", karma: "good" }
  ];

  constructor() { }
}
