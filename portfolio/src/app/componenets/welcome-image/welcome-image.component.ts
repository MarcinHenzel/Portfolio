import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-welcome-image',
  templateUrl: './welcome-image.component.html',
  styleUrls: ['./welcome-image.component.scss']
})
export class WelcomeImageComponent implements OnInit {
  faAngleDoubleDown = faAngleDoubleDown;
  constructor() { }

  ngOnInit(): void {
  }

}
