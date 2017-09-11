import * as jsonfile from 'jsonfile';

export class FanConfiguration {

    private automatic: boolean;
    private threshold: number;

    public constructor() {
        let config = this.readConfig();

        this.automatic = config.automatic;
        this.threshold = config.threshold;
    }

    public isAutomatic(): boolean {
        return this.automatic;
    }

    public setAutomatic(automatic: boolean): void {
        this.automatic = automatic;
        this.saveConfig();
    }

    public getThreshold(): number {
        return this.threshold;
    }

    public setThreshold(threshold: number): void {
        this.threshold = threshold;
        this.saveConfig();
    }

    private readConfig(): any {
        return jsonfile.readFileSync('configuration.json');
    }

    private saveConfig(): void {
        jsonfile.writeFile('configuration.json', {
            'automatic': this.automatic,
            'threshold': this.threshold
        });
    }

}