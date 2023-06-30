import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private Router: Router) {
    if (!this.getAge()) {
      this.Router.navigate(['enterage']);
    }
  }

  getLanguage() {
    const lang = localStorage.getItem('language');
    if (lang) {
      return lang;
    }
    return 'en';
  }

  setLanguage(lang: string) {
    localStorage.setItem('language', lang);
  }

  getCategories() {
    const categories = localStorage.getItem('categories');
    if (categories) {
      return JSON.parse(categories);
    }
    return undefined;
  }

  setCategories(categories: any[]) {
    localStorage.setItem('categories', JSON.stringify(categories));
  }

  getFlags() {
    const flags = localStorage.getItem('flags');
    if (flags) {
      return JSON.parse(flags);
    }
    return undefined;
  }

  setFlags(flags: any[]) {
    localStorage.setItem('flags', JSON.stringify(flags));
  }

  getAge(): number | null {
    const age = localStorage.getItem('age');
    if (age) {
      return Number(age);
    }
    return null;
  }

  setAge(age: number) {
    localStorage.setItem('age', age.toString());
  }

  clear() {
    localStorage.clear();
  }
}
