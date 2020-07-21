import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface sendMailBody {
  message: string;
  number: string;
  from: string;
  mail: string;
}
@Injectable({
  providedIn: 'root'
})
export class SendGridService {

  constructor(private http: HttpClient)  { }
  sendMail(body) {
    return this.http.post('api/sendMail', body);
  }
}
