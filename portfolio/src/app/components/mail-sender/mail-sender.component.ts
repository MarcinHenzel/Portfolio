import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SendGridService } from 'src/app/shared/services/send-grid.service';
import { ThemeSwitcherService } from 'src/app/shared/theme-switcher.service';

@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.scss']
})
export class MailSenderComponent implements OnInit {

  constructor(private sendGrid: SendGridService, private fb: FormBuilder, private themSwitcher: ThemeSwitcherService) { }
  sendMailForm: FormGroup = this.fb.group({
    phone: '',
    name: '',
    message: '',
    mail: ''
  })
  ngOnInit(): void {
  }

  changeTheme(primary: string) {
    document.documentElement.style.setProperty('--main-bg', primary);
  }
  send() {
    const body = {phone: this.sendMailForm.get('phone').value,
    name: this.sendMailForm.get('name').value,
    message: this.sendMailForm.get('message').value,
    mail: this.sendMailForm.get('mail').value};
    console.log(body);
    this.sendGrid.sendMail(body).subscribe(mes => console.log(mes));
  }
}
