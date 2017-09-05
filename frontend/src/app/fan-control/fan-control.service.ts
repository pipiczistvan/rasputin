import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class FanControlService {

  constructor(private http: Http) { }

  turnOn() {
    console.log("posting");
    this.http.post('/api/fan/activity', {
        active: true
    }).subscribe();
  }

  turnOff() {
    this.http.post('/api/fan/activity', {
        active: false
    }).subscribe();
  }

  getStatus(): Observable<any> {
    return this.http.get("/api/fan/activity")
      .map((res: Response) => res.json());
  }

  getTemperature(updateMillis: number): Observable<any> {
    return Observable.timer(0, updateMillis).flatMap(() => {
      return this.http.get("/api/fan/temperature")
        .map((res: Response) => res.json());
    });
  }

}
