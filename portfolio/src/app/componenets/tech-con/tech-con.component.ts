import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tech-con',
  templateUrl: './tech-con.component.html',
  styleUrls: ['./tech-con.component.scss']
})
export class TechConComponent implements OnInit {
  pictures = [
    { alt: 'angular', src: '../../../assets/icons/angular.png' },
    { alt: 'typescript', src: '../../../assets/icons/typescript.png' },
    { alt: 'javascript', src: '../../../assets/icons/javascript.png' },
    { alt: 'html', src: '../../../assets/icons/html.png' },
    { alt: 'css', src: '../../../assets/icons/css.png' },
    { alt: 'sass', src: '../../../assets/icons/sass.png' },
    { alt: 'sql', src: '../../../assets/icons/sql.png' },
    { alt: 'rxjs', src: '../../../assets/icons/rxjs.png' },
    { alt: 'ngrx', src: '../../../assets/icons/ngrx.png' },
    { alt: 'git', src: '../../../assets/icons/git.png' },
    { alt: 'gitlab', src: '../../../assets/icons/gitlab.png' },
    { alt: 'github', src: '../../../assets/icons/github.png' },
    { alt: 'firebase', src: '../../../assets/icons/firebase.png' },
    { alt: 'csharp', src: '../../../assets/icons/csharp.png' },
    { alt: 'arduino', src: '../../../assets/icons/arduino.png' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
