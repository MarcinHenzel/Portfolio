import { ThemeSwitcherService } from './../../shared/theme-switcher.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean;
  subscription: Subscription;
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const hash = '#' + entry.target.id + '-anchor';
      const navEl = document.querySelector(`a[href="${hash}"]`);
      entry.isIntersecting ? this.rend.addClass(navEl, 'active') : this.rend.removeClass(navEl, 'active');
    })
  }, { rootMargin: '-40% 0px -55% 0px' });


  constructor(private themeSwitcher: ThemeSwitcherService, private rend: Renderer2) { }

  ngOnInit(): void {
    this.subscription = this.themeSwitcher.isDark.subscribe(val => this.isDarkMode = val);
    document.querySelectorAll('.inter-obser-tag').forEach(section => {
      this.observer.observe(section);
    })
  }
  toggleTheme(event) {
    event.checked ? this.themeSwitcher.setDark() : this.themeSwitcher.setLight();
  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
}
