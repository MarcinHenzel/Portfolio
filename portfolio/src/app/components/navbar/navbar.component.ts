import { ThemeSwitcherService } from './../../shared/theme-switcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkMode :boolean;
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log(entry.target.id);
    })
  })
  constructor(private themeSwitcher: ThemeSwitcherService) { }

  ngOnInit(): void {
    this.isDarkMode = this.themeSwitcher.isDarkMode;
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
