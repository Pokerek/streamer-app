import HttpError from './http-error';

export default class StreamerNotFound extends HttpError {
    constructor() {
        super(404, 'Streamer not found');
    }
}