import { Value, Properties } from 'ts-json-properties';
const limit = 50;
const updateTime = 10000;

import * as childProcess from 'child_process';

export class FanContext {

    @Value('scripts.fan.temperature')
    private temperatureScript: string;
    @Value('scripts.fan.turn.on')
    private turnOnScript: string;
    @Value('scripts.fan.turn.off')
    private turnOffScript: string;

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
        let processOutput = childProcess.execSync(this.temperatureScript).toString();
        this.temperature = parseInt(processOutput);
    }

    private updateActivity(): void {
        //this.active = this.temperature > limit;
    }

    private updateGpio(): void {
        if (this.active) {
            childProcess.execSync(this.turnOnScript);
        } else {
            childProcess.execSync(this.turnOffScript);
        }
    }

}