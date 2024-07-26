import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    console.log("TEST")
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme as 'light' | 'dark';
      this.applyTheme(this.currentTheme);
    } else {
      this.applyTheme(this.currentTheme);
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
