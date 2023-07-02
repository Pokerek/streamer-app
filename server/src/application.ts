import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';

dotenv.config();

import ErrorMiddleware from './middlewares/error-middleware';
import MongooseService from './services/mongoose-service';
import StreamersRouter from './routes/streamers-router';
import SocketService from './services/socket-service';


export default class Application {
    private server: any;
    private app: express.Application;
    private PORT = Number(process.env.PORT) || 3000;

    constructor() {
        this.app = express();
        this.server = createServer(this.app);
        SocketService.init(this.server);

        MongooseService.connect();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.app.use(ErrorMiddleware.errorHandler);
    }

    private initializeMiddlewares = () => {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes = () => {
        const streamersRoute = new StreamersRouter();
        this.app.use('/', streamersRoute.router)
    }

    start = () => {
        this.server.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT}`);
        });
    }

}