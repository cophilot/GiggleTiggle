import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(
    private jokeService: JokeService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

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

  goToHome() {
    this.router.navigate(['/']);
  }

  clearLocalStorage() {
    this.localStorageService.clear();
  }
  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
