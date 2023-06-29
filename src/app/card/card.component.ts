import { Component, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  constructor(private jokeService: JokeService) {}

  getJokeService() {
    return this.jokeService;
  }
}
