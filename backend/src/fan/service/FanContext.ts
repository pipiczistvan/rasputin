const limit = 50;
const updateTime = 10000;

import * as childProcess from 'child_process';

export class FanContext {

    public active: boolean;
    public temperature: number;

    constructor() {
        this.active = false;
        this.temperature = 0;

        this.updateContext();
    }

    private updateContext(): void {
        this.updateTemperature();
        this.updateActivity();
        this.updateGpio();

        setTimeout(() => this.updateContext(), updateTime);
    }

    private updateTemperature(): void {
        let processOutput = childProcess.execSync('./res/get_temp.sh').toString();
        this.temperature = parseInt(processOutput);
    }

    private updateActivity(): void {
        //this.active = this.temperature > limit;
    }

    private updateGpio(): void {
        if (this.active) {
            childProcess.execSync('./res/write_gpio.sh 18 1');
        } else {
            childProcess.execSync('./res/write_gpio.sh 18 0');
        }
    }

}