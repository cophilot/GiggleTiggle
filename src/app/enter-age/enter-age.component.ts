import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-age',
  templateUrl: './enter-age.component.html',
  styleUrls: ['./enter-age.component.sass'],
})
export class EnterAgeComponent {
  age: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  submit() {
    if (this.age > 100 || this.age <= 0) {
      this.age = 0;
      return;
    }
    this.localStorageService.setAge(this.age);
    this.router.navigate(['/']);
  }
}
