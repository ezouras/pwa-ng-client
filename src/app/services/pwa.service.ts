import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor(private http: HttpClient) { }

  addPushSubscriber(sub: any) {
    return this.http.post('http://localhost:3000/addSubscriber', sub);
  }

  getSubscribers() {
    console.log("getting subscribers");
    return this.http.get('http://localhost:3000/getSubscribers')
  }

  pushANotification(message: string) {
    return this.http.post('http://localhost:3000/pushNotification', { message })
  }
}
