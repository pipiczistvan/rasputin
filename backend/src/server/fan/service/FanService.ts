import { FanContext } from './FanContext';

export class FanService {

    private context: FanContext;

    constructor() {
        this.context = new FanContext();
    }

    public getTemperature(): number {
        return this.context.getTemperature();
    }

    public getActivity(): boolean {
        return this.context.isActive();
    }

    public setActivity(active: boolean): void {
        this.context.setActivity(active);
    }

}