import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendGridService } from 'src/app/shared/services/send-grid.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.scss']
})
export class MailSenderComponent implements OnInit {
  antiSpamCounter = 0;
  faCheck = faCheck;
  isCheckedVis = false;
  constructor(private sendGrid: SendGridService, private fb: FormBuilder) { }

  sendMailForm: FormGroup = this.fb.group({
    phone: [''],
    name: ['', Validators.required],
    message: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
  })
  ngOnInit(): void {
  }
  send() {
    if (this.antiSpamCounter++ >= 3) return;
    const body = {phone: this.sendMailForm.get('phone').value,
    name: this.sendMailForm.get('name').value,
    message: this.sendMailForm.get('message').value,
    mail: this.sendMailForm.get('mail').value};
    this.sendGrid.sendMail(body).subscribe(mes => console.log(mes));
    this.showCheck();
  }
  showCheck() {
    this.isCheckedVis = true;
    setTimeout(() => this.isCheckedVis = false, 5000);
  }
}
