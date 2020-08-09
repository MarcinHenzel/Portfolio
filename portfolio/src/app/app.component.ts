import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from './shared/theme-switcher.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  subscription: Subscription;
  isDarkMode: BehaviorSubject<boolean>;
  constructor(private themeService: ThemeSwitcherService) { }
  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDark;
  }

}
