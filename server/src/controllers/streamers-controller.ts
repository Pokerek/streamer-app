import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import StreamersService from '../services/streamers-service';
import StreamerNotFound from '../errors/streamer-not-found-error';
import StreamerValidation from '../validations/streamer-validation';

export default class StreamersController {
    private streamersService: StreamersService;

    constructor() {
        this.streamersService = new StreamersService();
    }

    getStreamer = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        try {
            const streamer = await this.streamersService.getStreamer(id);
            if (!streamer) {
                throw new StreamerNotFound();
            }

            res.status(StatusCodes.OK).json(streamer);
        } catch (error) {
            next(error);
        }
    }

    getStreamers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const streamers = await this.streamersService.getStreamers();
            res.status(StatusCodes.OK).json(streamers);
        } catch (error) {
            next(error);
        }
    }

    createStreamer = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validateBodyRequest = StreamerValidation.createStreamer(req.body);
            const streamer = await this.streamersService.createStreamer(validateBodyRequest);

            res.status(StatusCodes.CREATED).json(streamer);
        } catch (error) {
            next(error);
        }
    }

    voteStreamer = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        try {
            const isVoteUp = StreamerValidation.voteStreamer(req.body);
            await this.streamersService.voteStreamer(id, isVoteUp);

            res.status(StatusCodes.ACCEPTED).send();
        } catch (error) {
            next(error);
        }
    }
}