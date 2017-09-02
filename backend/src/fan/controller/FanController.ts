import { FanService } from './../service/FanService';
import { Router, Request, Response, NextFunction } from 'express';

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
        this.postActivity();
    }

    private getTemperature(): void {
        this.router.get('/temperature', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;
            const data = { value: this.fanService.getTemperature() };

            res.json({
                status,
                data
            });
        });
    }

    private getActivity(): void {
        this.router.get('/activity', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;
            const data = { value: this.fanService.getActivity() };

            res.json({
                status,
                data
            });
        });
    }

    private postActivity(): void {
        this.router.post('/activity', (req: Request, res: Response, next: NextFunction) => {
            const status = res.statusCode;

            this.fanService.setActivity(req.body.active);

            res.json({
                status
            });
        });
    }

}

export default new FanController().router;