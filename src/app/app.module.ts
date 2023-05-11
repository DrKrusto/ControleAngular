import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { FormsModule } from '@angular/forms';
import { SingleCharacterDetailsComponent } from './single-character-details/single-character-details.component';

const routes: Routes = [
  { path: 'characters/:id', component: SingleCharacterDetailsComponent },
  { path: 'characters', component: CharacterDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    SingleCharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
