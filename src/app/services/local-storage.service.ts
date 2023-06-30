import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

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

  clear() {
    localStorage.clear();
  }
}
