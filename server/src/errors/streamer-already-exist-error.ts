import BusinessLogicError from "./business-logic-error";

export default class StreamerAlreadyExistError extends BusinessLogicError {
    constructor() {
        super('Streamer already exists');
    }
}