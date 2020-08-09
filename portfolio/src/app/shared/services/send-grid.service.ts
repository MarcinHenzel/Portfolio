import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SendMailBody } from 'src/app/shared/models/SendMailBody';

@Injectable({
  providedIn: 'root'
})
export class SendGridService {

  constructor(private http: HttpClient)  { }
  sendMail(body: SendMailBody) {
    return this.http.post('api/sendMail', body);
  }
}
