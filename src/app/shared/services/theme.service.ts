import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme = signal<'light' | 'dark'>('light');

  constructor() {
    const savedTheme = localStorage.getItem('TMS-THEME');
    if (savedTheme) {
      this.currentTheme.set(savedTheme as 'light' | 'dark')
      this.applyTheme(this.currentTheme());
    } else {
      this.applyTheme(this.currentTheme());
    }
  }

  toggleTheme() {
    this.currentTheme.update(c => c === 'light' ? 'dark' : 'light')
    this.applyTheme(this.currentTheme());
  }

  applyTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('TMS-THEME', theme);
  }

  getCurrentTheme() {
    return this.currentTheme();
  }
}
