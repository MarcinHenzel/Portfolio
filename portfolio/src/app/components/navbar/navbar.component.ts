import { ThemeSwitcherService } from './../../shared/theme-switcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private themeSwitcher: ThemeSwitcherService) { }

  ngOnInit(): void {
  }
  toggle(event){
    event.checked ? this.themeSwitcher.setDark() : this.themeSwitcher.setLight();
  }
}
