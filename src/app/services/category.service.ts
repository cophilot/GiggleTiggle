import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: any[] = [];

  constructor(private localStorage: LocalStorageService) {
    this.categories = this.localStorage.getCategories();
    if (!this.categories) {
      this.categories = this.getNewCategories();
      this.localStorage.setCategories(this.categories);
    }
    this.sortCategoriesByScore();
  }

  uprateCategory(category: string): void {
    this.categories.forEach((cat) => {
      if (cat.name === category) {
        cat.score++;
      }
    });
    this.sortCategoriesByScore();
    this.localStorage.setCategories(this.categories);
  }

  downrateCategory(category: string): void {
    this.categories.forEach((cat) => {
      if (cat.name === category) {
        cat.score--;
      }
    });
    this.sortCategoriesByScore();
    this.localStorage.setCategories(this.categories);
  }

  getNewCategories(): any[] {
    return [
      { name: 'Programming', score: 10 },
      { name: 'Misc', score: 10 },
      { name: 'Dark', score: 10 },
      { name: 'Pun', score: 10 },
      { name: 'Spooky', score: 10 },
      { name: 'Christmas', score: 10 },
    ];
  }

  sortCategoriesByScore(): void {
    this.categories.sort((a, b) => {
      return b.score - a.score;
    });
  }

  getBestRatedCategories(): string {
    let scores: number[] = [];
    this.categories.forEach((cat) => {
      if (cat.score > 0) {
        if (scores.indexOf(cat.score) === -1) {
          scores.push(cat.score);
        }
      }
    });
    scores.sort((a, b) => {
      return b - a;
    });
    let thirdScore: number = scores[2];
    if (scores.length < 3) {
      thirdScore = scores[scores.length - 1];
    } else {
      thirdScore = scores[2];
    }
    let bestRatedCategories: string[] = [];

    this.categories.forEach((cat) => {
      if (cat.score >= thirdScore && cat.score >= 0) {
        if (cat.name === 'Misc') {
          bestRatedCategories.push('Miscellaneous');
        } else {
          bestRatedCategories.push(cat.name);
        }
      } else {
        let random = Math.floor(Math.random() * 100);
        if (random < 10) {
          if (cat.name === 'Misc') {
            bestRatedCategories.push('Miscellaneous');
          } else {
            bestRatedCategories.push(cat.name);
          }
        }
      }
    });
    return bestRatedCategories.join(',');
  }
}
