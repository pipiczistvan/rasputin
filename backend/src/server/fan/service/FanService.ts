import { FanContext } from './FanContext';

export class FanService {

    private context: FanContext;

    constructor() {
        this.context = new FanContext();
    }

    public getTemperature(): number {
        return this.context.temperature;
    }

    public getActivity(): boolean {
        return this.context.active;
    }

    public setActivity(active: boolean): void {
        this.context.active = active;
    }

}