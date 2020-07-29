import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface CssProperty {
  readonly name: string;
  readonly value: string;
}
@Injectable({
  providedIn: 'root'
})

export class ThemeSwitcherService {
   isDark = new BehaviorSubject((localStorage.getItem('mhTheme') === 'dark') ? true : false);

  private lightTheme = [
    { name: '--background', value: '#ececec' },
    { name: '--strong-text', value: 'rgb(20,20,20)' },
    { name: '--text', value: '#222831' },
    { name: '--primary', value: '#F64E4D' },
    { name: '--project-bg', value: 'white' },
    { name: '--navbar-bg', value: 'rgb(255,255,255, .7)' },

  ];
  private darkTheme = [
    { name: '--background', value: 'rgb(30, 30, 30)' },
    { name: '--strong-text', value: '#ececec' },
    { name: '--text', value: 'rgb(184, 184, 184)' },
    { name: '--primary', value: '#ff9f56' },
    { name: '--project-bg', value: 'rgb(20,20,20)' },
    { name: '--navbar-bg', value: 'rgb(0,0,0, .7)' },

  ];
  constructor() {
    this.isDark.value ? this.setDark() : this.setLight();
  }
  public setLight() {
    this.lightTheme.forEach((prop: CssProperty) => {
      document.documentElement.style.setProperty(prop.name, prop.value);
    });
    this.isDark.next(false);
    localStorage.setItem('mhTheme', 'light');
  };
  public setDark() {
    this.darkTheme.forEach((prop: CssProperty) => {
      document.documentElement.style.setProperty(prop.name, prop.value);
    });
    this.isDark.next(true);

    localStorage.setItem('mhTheme', 'dark');
  }

}
