import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
