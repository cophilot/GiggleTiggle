import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  language: string = 'en';

  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get(
      'https://v2.jokeapi.dev/joke/Any?lang=' + this.language
    );
  }
}
