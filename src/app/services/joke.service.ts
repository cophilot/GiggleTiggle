import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  language: string = 'en';
  joke: string = '';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {
    this.language = this.localStorage.getLanguage();
    this.newJoke();
  }

  getJoke(): string {
    return this.joke;
  }

  newJoke(): void {
    this.http
      .get('https://v2.jokeapi.dev/joke/Any?lang=' + this.language)
      .subscribe((res: any) => {
        if (res.type === 'single') {
          this.joke = res.joke;
        } else {
          this.joke = res.setup + ' ' + res.delivery;
        }
      });
  }

  changeLanguage(language: string): void {
    this.language = language;
    this.localStorage.setLanguage(language);
    this.newJoke();
  }

  //https://api.chucknorris.io/jokes/random
}
