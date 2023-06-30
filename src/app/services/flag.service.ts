import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  flags: any[] = [];

  constructor(private localStorage: LocalStorageService) {
    this.flags = this.localStorage.getFlags();
    if (!this.flags) {
      this.flags = this.getNewFlags();
      this.localStorage.setFlags(this.flags);
    }
    this.sortFlagsByScore();
  }

  uprateFlag(flag: string): void {
    this.flags.forEach((cat) => {
      if (cat.name === flag) {
        cat.score++;
      }
    });
    this.sortFlagsByScore();
    this.localStorage.setFlags(this.flags);
  }

  downrateFlag(flag: string): void {
    this.flags.forEach((cat) => {
      if (cat.name === flag) {
        cat.score--;
      }
    });
    this.sortFlagsByScore();
    this.localStorage.setFlags(this.flags);
  }

  getNewFlags(): any[] {
    return [
      { name: 'nsfw', score: 10 },
      { name: 'religious', score: 10 },
      { name: 'political', score: 10 },
      { name: 'sexist', score: 10 },
      { name: 'explicit', score: 10 },
    ];
  }

  sortFlagsByScore(): void {
    this.flags.sort((a, b) => {
      return b.score - a.score;
    });
  }

  getFlags(): string {
    let flags = 'blacklistFlags=racist';
    let age = this.localStorage.getAge();
    if (age === null) {
      flags += ',nsfw,explicit';
    } else if (age < 18) {
      flags += ',nsfw,explicit';
    }
    this.flags.forEach((flag) => {
      let random = Math.floor(Math.random() * 100);
      if (flag.score <= 0 && random > 10) {
        flags += ',' + flag.name;
      }
    });
    return flags;
  }
}
