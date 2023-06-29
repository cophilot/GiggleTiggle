import { Component } from '@angular/core';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'GiggleTiggle';

  joke: string = '';

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke().subscribe((res: any) => {
      if (res.type === 'single') {
        this.joke = res.joke;
      } else {
        this.joke = res.setup + '\n' + res.delivery;
      }
    });
  }

  getInverseLanguage() {
    if (this.jokeService.language === 'en') {
      return 'de';
    } else {
      return 'en';
    }
  }

  changeLanguage(language: string) {
    this.jokeService.language = language;
    this.getJoke();
  }
}
