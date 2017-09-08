import { Value } from 'ts-json-properties';

const updateTime = 10000;

import * as childProcess from 'child_process';

export class FanContext {

    @Value('scripts.fan.temperature')
    private temperatureScript: string;
    @Value('scripts.fan.turn.on')
    private turnOnScript: string;
    @Value('scripts.fan.turn.off')
    private turnOffScript: string;

    private active: boolean;
    private temperature: number;

    private automatic: boolean;
    private threshold: number;

    constructor() {
        this.active = false;
        this.temperature = 0;

        this.automatic = false;
        this.threshold = 40;

        this.updateContext();
    }

    public isActive(): boolean {
        return this.active;
    }

    public setActivity(active: boolean): void {
        this.active = active;
        this.updateGpio();
    }

    public getTemperature(): number {
        return this.temperature;
    }

    public isAutomatic(): boolean {
        return this.automatic;
    }

    public setAutomation(automatic: boolean): void {
        this.automatic = automatic;
        this.updateActivity();
    }

    public getThreshold(): number {
        return this.threshold;
    }

    public setThreshold(threshold: number): void {
        this.threshold = threshold;
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
        if(this.automatic) {
            this.active = this.temperature > this.threshold;
        }
    }

    private updateGpio(): void {
        if (this.active) {
            childProcess.execSync(this.turnOnScript);
        } else {
            childProcess.execSync(this.turnOffScript);
        }
    }

}