import { Injectable } from '@angular/core';
interface CssProperty {
  readonly name: string;
  readonly value: string;
}
@Injectable({
  providedIn: 'root'
})

export class ThemeSwitcherService {
  private isDark = false;
  public get isDarkMode(){
    return this.isDark;
  }
  private lightTheme = [
    { name: '--background', value: '#ececec' },
    { name: '--strong-text', value: 'rgb(20,20,20)' },
    { name: '--text', value: '#222831' },
    { name: '--primary', value: '#f2a365' },
    { name: '--secondary', value: '#30475e' }
  ];
  private darkTheme = [
    { name: '--background', value: 'rgb(20,20,20)' },
    { name: '--strong-text', value: '#ececec' },
    { name: '--text', value: 'rgb(184, 184, 184)' },
    { name: '--primary', value: '#30475e' },
    { name: '--secondary', value: '#f2a365' }
  ];
  constructor() { }
  public setLight() {
    this.lightTheme.forEach((prop: CssProperty) => {
    document.documentElement.style.setProperty(prop.name, prop.value);
    });
    this.isDark = false;
  };
  public setDark() {
    this.darkTheme.forEach((prop: CssProperty) => {
      document.documentElement.style.setProperty(prop.name, prop.value);
      });
    this.isDark = true;
  }
}
