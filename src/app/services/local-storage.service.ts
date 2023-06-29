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
}
