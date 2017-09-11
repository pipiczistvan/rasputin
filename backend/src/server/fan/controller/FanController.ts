import { FanService } from '../service/FanService';
import { NextFunction, Request, Response, Router } from 'express';

class FanController {

    public router: Router;
    private fanService: FanService;

    constructor() {
        this.router = Router();
        this.fanService = new FanService();

        this.setupRoutes();
    }

    private setupRoutes() {
        this.getTemperature();
        this.getActivity();
        this.getAutomation();
        this.getThreshold();

        this.postActivity();
        this.postAutomation();
        this.postThreshold();
    }

    private getTemperature(): void {
        this.router.get('/temperature', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;
            const temperature = this.fanService.getTemperature();

            res.json({
                status: status,
                value: temperature
            });
        });
    }

    private getActivity(): void {
        this.router.get('/activity', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;
            const active = this.fanService.getActivity();

            res.json({
                status: status,
                value: active
            });
        });
    }

    private getAutomation(): void {
        this.router.get('/automation', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;
            const automatic = this.fanService.getAutomation();

            res.json({
                status: status,
                value: automatic
            });
        });
    }

    private getThreshold(): void {
        this.router.get('/threshold', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;
            const threshold = this.fanService.getThreshold();

            res.json({
                status: status,
                value: threshold
            });
        });
    }

    private postActivity(): void {
        this.router.post('/set-activity', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;

            this.fanService.setActivity(req.body.value);

            const active = this.fanService.getActivity();

            res.json({
                status: status,
                value: active
            });
        });
    }

    private postAutomation(): void {
        this.router.post('/set-automation', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;

            this.fanService.setAutomation(req.body.value);

            const active = this.fanService.getActivity();

            res.json({
                status: status,
                value: active
            });
        });
    }

    private postThreshold(): void {
        this.router.post('/set-threshold', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;

            this.fanService.setThreshold(req.body.value);

            const active = this.fanService.getActivity();

            res.json({
                status: status,
                value: active
            });
        });
    }

}

export default new FanController().router;