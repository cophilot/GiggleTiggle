import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Joke } from '../utils/Joke';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  language: string = 'en';
  joke: Joke = new Joke(0, '', '');

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private categoryService: CategoryService
  ) {
    this.language = this.localStorage.getLanguage();
    this.newJoke();
  }

  likeJoke(): void {
    this.categoryService.uprateCategory(this.joke.category);
  }

  dislikeJoke(): void {
    this.categoryService.downrateCategory(this.joke.category);
  }

  getJoke(): Joke {
    return this.joke;
  }

  newJoke(): void {
    this.http.get(this.getURL()).subscribe((res: any) => {
      let text: string = '';
      let isTwoPart: boolean = false;
      let answer: string = '';
      if (res.type === 'single') {
        text = res.joke;
      } else {
        text = res.setup;
        isTwoPart = true;
        answer = res.delivery;
      }

      let flags = [];
      if (res.flags.nsfw) {
        flags.push('nsfw');
      }
      if (res.flags.religious) {
        flags.push('religious');
      }
      if (res.flags.political) {
        flags.push('political');
      }
      if (res.flags.racist) {
        flags.push('racist');
      }
      if (res.flags.sexist) {
        flags.push('sexist');
      }
      if (res.flags.explicit) {
        flags.push('explicit');
      }

      this.joke = new Joke(
        res.id,
        text,
        res.category,
        flags,
        isTwoPart,
        answer
      );
    });
  }

  getURL(): string {
    return (
      'https://v2.jokeapi.dev/joke/' +
      this.categoryService.getBestRatedCategories() +
      '?lang=' +
      this.language
    );
  }

  changeLanguage(language: string): void {
    this.language = language;
    this.localStorage.setLanguage(language);
    this.newJoke();
  }

  //https://api.chucknorris.io/jokes/random
}
