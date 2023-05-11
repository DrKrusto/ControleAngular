import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() character: Character;

  reverseKarma() {
    const invertedKarma = this.character.karma == 'good' ? 'bad' : 'good';
    this.character.karma = invertedKarma;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
