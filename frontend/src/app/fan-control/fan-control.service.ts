import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class FanControlService {

  constructor(private http: Http) { }

  getTemperature(updateMillis: number): Observable<any> {
    return Observable.timer(0, updateMillis).flatMap(() => {
      return this.http.get("/api/fan/temperature")
        .map((res: Response) => res.json());
    });
  }

  getActivity(updateMillis: number): Observable<any> {
    return Observable.timer(0, updateMillis).flatMap(() => {
      return this.http.get("/api/fan/activity")
        .map((res: Response) => res.json());
    });
  }

  setActivity(active: boolean): Observable<any> {
    return this.http.post("/api/fan/set-activity", {
      value: active
    });
  }

  getAutomation(): Observable<any> {
      return this.http.get("/api/fan/automation")
        .map((res: Response) => res.json());
  }

  setAutomation(automatic: boolean): Observable<any> {
    return this.http.post("/api/fan/set-automation", {
      value: automatic
    }).map((res: Response) => res.json());
  }

  getThreshold(): Observable<any> {
    return this.http.get("/api/fan/threshold")
      .map((res: Response) => res.json());
  }

  setThreshold(threshold: number): Observable<any> {
      return this.http.post("/api/fan/set-threshold", {
        value: threshold
      }).map((res: Response) => res.json());
  }

}
