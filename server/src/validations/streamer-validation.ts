import Joi from "joi";
import { Streamer } from "../services/streamers-service";
import ValidationError from "../errors/validation-error";

const newStreamerSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    platform: Joi.string().required()
});

const voteStreamerSchema = Joi.object({
    isVoteUp: Joi.boolean().required()
});

export default class StreamerValidation {
    static createStreamer = (streamer: unknown): Streamer => {
        const { error, value } = newStreamerSchema.validate(streamer, { abortEarly: false });

        if (error) {
            throw new ValidationError(error.message);
        }

        return value as Streamer;
    }

    static voteStreamer = (vote: unknown): boolean => {
        const { error, value } = voteStreamerSchema.validate(vote, { abortEarly: false });

        if (error) {
            throw new ValidationError(error.message);
        }

        return value.isVoteUp;
    }
}