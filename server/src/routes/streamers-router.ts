import express from 'express';

import StreamersController from '../controllers/streamers-controller';

export default class StreamersRouter {
    private streamersController: StreamersController;
    public router: express.Router;

    constructor() {
        this.streamersController = new StreamersController();
        this.router = express.Router();

        this.router.get('/streamer/:id', this.streamersController.getStreamer);
        this.router.get('/streamers', this.streamersController.getStreamers);
        this.router.post('/streamers', this.streamersController.createStreamer);
        this.router.put('/streamers/:id/vote', this.streamersController.voteStreamer);
    }
}