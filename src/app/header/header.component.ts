import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private jokeService: JokeService) {}

  getInverseLanguage() {
    if (this.jokeService.language === 'en') {
      return 'de';
    } else {
      return 'en';
    }
  }

  changeLanguage(language: string) {
    this.jokeService.changeLanguage(language);
  }
}
