import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private baseUrl: string = "http://localhost:9090";
  constructor(private http: HttpClient) { }

  registerMail(mailTo : string, username : string){
    console.log(mailTo);
    console.log(username);
    return this.http.get("http://localhost:9090/sendmail/parnab.das97@gmail.com,parnab",{responseType: 'text' as 'json' });
  }
}
