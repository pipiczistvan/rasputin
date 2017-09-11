import { FanConfiguration } from './FanConfiguration';
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

    private configuration: FanConfiguration;

    constructor() {
        this.active = false;
        this.temperature = 0;
        this.configuration = new FanConfiguration();

        this.updateContext();
    }

    public isActive(): boolean {
        return this.active;
    }

    public setActivity(active: boolean): void {
        this.active = active;
        this.updateContext();
    }

    public getTemperature(): number {
        return this.temperature;
    }

    public isAutomatic(): boolean {
        return this.configuration.isAutomatic();
    }

    public setAutomation(automatic: boolean): void {
        this.configuration.setAutomatic(automatic);
        this.updateContext();
    }

    public getThreshold(): number {
        return this.configuration.getThreshold();
    }

    public setThreshold(threshold: number): void {
        this.configuration.setThreshold(threshold);
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
        if(this.isAutomatic()) {
            this.active = (this.temperature > this.getThreshold());
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