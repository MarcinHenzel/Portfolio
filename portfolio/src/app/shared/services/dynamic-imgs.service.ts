import { Injectable } from '@angular/core';
import { projectImgs } from '../models/projectImgs';

@Injectable({
  providedIn: 'root'
})
export class DynamicImgsService {

  constructor() { }
  readonly projectsArr = [
    {
      title: 'ITFS', images: [
        { alt: 'Rwd', src: 'assets/images/rwdPhones.png' },
        { alt: 'Search deleg', src: 'assets/screenshots/search-deleg.png' },
        { alt: 'Home', src: 'assets/screenshots/home.png' },
      ]
    },
    {
      title: 'Tribal Manager', images: [
        { alt: 'Assign orders', src: 'assets/screenshots/assignOrders.png' },
        { alt: 'Best plan', src: 'assets/screenshots/bestAttackPlan.png' },
        { alt: 'Repetition counter', src: 'assets/screenshots/repetitionCounter.png' },
      ]
    },
    /*     {title: 'This Page', images: [
          {alt: 'Rwd', src:'assets/images/rwdPhones.png'},
          {alt: 'Search deleg', src:'assets/screenshots/search-deleg.png'},
          {alt: 'Home', src:'assets/screenshots/home.png.png'},
        ]} */
  ]
  readonly techIcons = [
    { alt: 'angular', src: 'assets/icons/angular.png' },
    { alt: 'typescript', src: 'assets/icons/typescript.png' },
    { alt: 'javascript', src: 'assets/icons/javascript.png' },
    { alt: 'html', src: 'assets/icons/html.png' },
    { alt: 'css', src: 'assets/icons/css.png' },
    { alt: 'sass', src: 'assets/icons/sass.png' },
    {alt: 'figma', src: 'assets/icons/figma.png'},
    { alt: 'sql', src: 'assets/icons/sql.png' },
    { alt: 'rxjs', src: 'assets/icons/rxjs.png' },
    { alt: 'ngrx', src: 'assets/icons/ngrx.png' },
    { alt: 'git', src: 'assets/icons/git.png' },
    { alt: 'gitlab', src: 'assets/icons/gitlab.png' },
    { alt: 'github', src: 'assets/icons/github.png' },
    { alt: 'firebase', src: 'assets/icons/firebase.png' },
    { alt: 'csharp', src: 'assets/icons/csharp.png' },
    { alt: 'arduino', src: 'assets/icons/arduino.png' },
  ]
  getProjectImgs(title): projectImgs {
    switch (title) {
      case 'ITFS': return this.projectsArr[0];
      case 'Tribal Manager': return this.projectsArr[1];
      case 'This Page': return this.projectsArr[2];
      default: {};
    }
  }
}
