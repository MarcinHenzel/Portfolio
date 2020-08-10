import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { ThemeSwitcherService } from './shared/services/theme-switcher.service';

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
