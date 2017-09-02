import * as express from 'express';
import * as bodyParser from 'body-parser';

import FanController from './fan/controller/FanController';

// Server class
class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private routes(): void {
        let router = express.Router();

        this.app.use('/', router);
        this.app.use('/api/fan', FanController)
    }

}

export default new Server().app;