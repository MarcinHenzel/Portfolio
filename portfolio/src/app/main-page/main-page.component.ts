import { SendGridService } from './../shared/services/send-grid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private sendGrid: SendGridService) { }

  ngOnInit(): void {
  }
  sendMail() {
    const body = {phone: '321321', name: "name321", message: 'message321', from: 'maciek@dsa'}
    this.sendGrid.sendMail(body).subscribe(mes => console.log(mes));
  }
}
