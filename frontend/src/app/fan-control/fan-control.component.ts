import { Observable } from 'rxjs/Rx';
import { FanControlService } from './fan-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fan-control',
  templateUrl: './fan-control.component.html',
  styleUrls: ['./fan-control.component.css']
})
export class FanControlComponent implements OnInit {

  fanActivity: boolean;
  automation: boolean;
  temperature: number;
  degrees: Array<any>;
  selectedDegree: any;

  constructor(private fanControlService: FanControlService) { }

  ngOnInit() {
    this.degrees = [40, 45, 50, 55, 60];

    this.fanControlService.getStatus()
      .subscribe(resp => this.fanActivity = resp.value);

    this.fanControlService.getTemperature(10000)
      .subscribe(resp => this.temperature = resp.value);
  }

  toggleFan() {
    if(!this.automation) {
      if (!this.fanActivity) {
        this.fanControlService.turnOn();
      } else {
        this.fanControlService.turnOff();
      }
    }
  }

}
