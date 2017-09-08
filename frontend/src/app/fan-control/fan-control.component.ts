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

  degrees: Array<any>;

  constructor(private fanControlService: FanControlService) { }

  ngOnInit() {
    this.degrees = [40, 45, 50, 55, 60];

    this.fanControlService.getTemperature(10000)
      .subscribe(resp => this.temperature = resp.value);

    this.fanControlService.getActivity()
      .subscribe(resp => this.activity = resp.value);

    this.fanControlService.getAutomation()
      .subscribe(resp => this.automation = resp.value);

    this.fanControlService.getThreshold()
      .subscribe(resp => this.threshold = resp.value);
  }

  toggleActivity() {
    this.fanControlService.setActivity(!this.activity)
      .subscribe();
  }

  toggleAutomation() {
    this.fanControlService.setAutomation(!this.automation)
      .subscribe();
  }

  setThreshold(threshold: number) {
    this.fanControlService.setThreshold(threshold)
      .subscribe();
  }

}
