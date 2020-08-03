import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendGridService } from 'src/app/shared/services/send-grid.service';
import { ThemeSwitcherService } from 'src/app/shared/theme-switcher.service';

@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.scss']
})
export class MailSenderComponent implements OnInit {

  constructor(private sendGrid: SendGridService, private fb: FormBuilder) { }
  sendMailForm: FormGroup = this.fb.group({
    phone: [''],
    name: ['', Validators.required],
    message: ['', Validators.required],
    mail: ['', Validators.email],
  })
  ngOnInit(): void {
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
