import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private jokeService: JokeService
  ) {}

  reset() {
    this.localStorageService.clear();
    window.location.reload();
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  openGithub() {
    window.open('https://github.com/cophilot/GiggleTiggle', '_blank');
  }
  getInverseLanguage() {
    if (this.jokeService.language === 'en') {
      return 'de';
    } else {
      return 'en';
    }
  }

  export() {}

  changeLanguage(language: string) {
    this.jokeService.changeLanguage(language);
  }
}
