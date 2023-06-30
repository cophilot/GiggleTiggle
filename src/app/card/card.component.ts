import { Component, Input } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  swipeCoord?: [number, number];
  swipeTime?: number;

  liked: boolean = false;
  disLiked: boolean = false;

  constructor(private jokeService: JokeService) {}

  like(): void {
    this.liked = true;
    setInterval(() => {
      this.liked = false;
    }, 1000);
    this.jokeService.likeJoke();
    this.jokeService.newJoke();
  }

  dislike(): void {
    this.disLiked = true;
    setInterval(() => {
      this.disLiked = false;
    }, 1000);
    this.jokeService.dislikeJoke();
    this.jokeService.newJoke();
  }

  getJokeService() {
    return this.jokeService;
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY,
    ];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      if (this.swipeCoord === undefined || this.swipeTime === undefined) return;

      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1],
      ];
      const duration = time - this.swipeTime;

      if (
        duration < 1000 && //
        Math.abs(direction[0]) > 30 && // Long enough
        Math.abs(direction[0]) > Math.abs(direction[1] * 3)
      ) {
        // Horizontal enough
        const swipe = direction[0] < 0 ? 'dislike' : 'like';
        if (swipe === 'like') {
          this.like();
        } else if (swipe === 'dislike') {
          this.dislike();
        }
      }
    }
  }
}
