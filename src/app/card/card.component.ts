import { Component, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  constructor(private jokeService: JokeService) {}

  like(): void {
    this.jokeService.likeJoke();
    this.jokeService.newJoke();
  }

  dislike(): void {
    this.jokeService.dislikeJoke();
    this.jokeService.newJoke();
  }

  getJokeService() {
    return this.jokeService;
  }
}
