import Joi from "joi";

import ValidationError from "../errors/validation-error";
import { Platform, Streamer } from "../types";
import { NAME_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from "../models/streamer-model";

const newStreamerSchema = Joi.object({
    name: Joi.string().required().max(NAME_MAX_LENGTH),
    description: Joi.string().required().max(DESCRIPTION_MAX_LENGTH),
    platform: Joi.string().required().equal(...Object.values(Platform)),
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