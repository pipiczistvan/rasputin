import { FanControlService } from './fan-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fan-control',
  templateUrl: './fan-control.component.html',
  styleUrls: ['./fan-control.component.css']
})
export class FanControlComponent implements OnInit {

  temperature: number;
  activity: boolean;
  automation: boolean;
  threshold: number;

  availableThresholds: Array<any>;

  constructor(private fanControlService: FanControlService) { }

  ngOnInit() {
    this.availableThresholds = [30, 35, 40, 45, 50, 55, 60];

    this.fanControlService.getTemperature(10000)
      .subscribe(resp => this.temperature = resp.value);

    this.fanControlService.getActivity(10000)
      .subscribe(resp => this.activity = resp.value);

    this.fanControlService.getAutomation()
      .subscribe(resp => this.automation = resp.value);

    this.fanControlService.getThreshold()
      .subscribe(resp => this.threshold = resp.value);
  }

  setActivity(activity: boolean): void {
    this.fanControlService.setActivity(activity)
    .subscribe();
  }

  setAutomation(automation: boolean): void {
    this.fanControlService.setAutomation(automation)
      .subscribe(resp => this.activity = resp.value);
  }

  setThreshold(threshold: number): void {
    this.fanControlService.setThreshold(threshold)
      .subscribe(resp => this.activity = resp.value);
  }

}
