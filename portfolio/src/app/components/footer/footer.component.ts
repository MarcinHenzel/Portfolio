import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFilePdf = faFilePdf;
  faGithub = faGithub;
  isCopyInfoVisible = false;
  mail = 'marcinhenzel96@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }
  copy() {
    this.isCopyInfoVisible = true;
    const input = document.createElement('textarea');
    input.innerHTML = this.mail;
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    setTimeout(() => {
      this.isCopyInfoVisible = false;
    }, 1500);
  }
}
