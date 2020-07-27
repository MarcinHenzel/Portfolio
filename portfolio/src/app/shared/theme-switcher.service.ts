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
    { name: '--project-bg', value: 'white' },
    {name: '--navbar-bg', value: 'rgb(255,255,255, .7)'}
  ];
  private darkTheme = [
    { name: '--background', value: 'rgb(30, 30, 30)' },
    { name: '--strong-text', value: '#ececec' },
    { name: '--text', value: 'rgb(184, 184, 184)' },
    { name: '--primary', value: '#30475e' },
    { name: '--project-bg', value: 'rgb(20,20,20)' },
    {name: '--navbar-bg', value: 'rgb(0,0,0, .7)'}

  ];
  constructor() {
    this.getInitTheme();
   }
  public setLight() {
    this.lightTheme.forEach((prop: CssProperty) => {
    document.documentElement.style.setProperty(prop.name, prop.value);
    });
    this.isDark = false;
    localStorage.setItem('mhTheme', 'light');
  };
  public setDark() {
    this.darkTheme.forEach((prop: CssProperty) => {
      document.documentElement.style.setProperty(prop.name, prop.value);
      });
    this.isDark = true;
    localStorage.setItem('mhTheme', 'dark');
  }
  public getInitTheme(){
    this.isDark = (localStorage.getItem('mhTheme') === 'dark') ? true : false;
    this.isDarkMode ? this.setDark() : this.setLight();
  }
}
