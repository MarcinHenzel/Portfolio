import { ThemeSwitcherService } from './../../shared/theme-switcher.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean;
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const hash = '#' + entry.target.id + '-anchor';
      const navEl = document.querySelector(`a[href="${hash}"]`);
      if (entry.isIntersecting) {
        navEl.classList.add('active');
      } else {
        navEl.classList.remove('active');
      }
    })
  }, {rootMargin: '-40% 0px -55% 0px'});


  constructor(private themeSwitcher: ThemeSwitcherService) { }

  ngOnInit(): void {
    this.themeSwitcher.isDark.subscribe(val => this.isDarkMode = val);
    document.querySelectorAll('.inter-obser-tag').forEach(section => {
      this.observer.observe(section);
    })
  }
  toggle(event) {
    event.checked ? this.themeSwitcher.setDark() : this.themeSwitcher.setLight();
  }

}
/* <main>
  <app-projects class="inter-obser-tag"id="Projects"></app-projects>
  <app-tech-con class="inter-obser-tag"id="Technologies"></app-tech-con>
  <app-mail-sender class="inter-obser-tag"id="Contact"></app-mail-sender>
</main>
 */
