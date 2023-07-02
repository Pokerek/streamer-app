import StreamerNotFound from "../errors/streamer-not-found-error";
import StreamerAlreadyExistError from "../errors/streamer-already-exist-error";
import StreamerModel from "../models/streamer-model";
import MongooseService from "./mongoose-service";

import { Streamer } from "../types";

export default class StreamersService {
    getStreamer = async (id: string) => {
        if (MongooseService.checkIfIdCorrect(id) === false) {
            return null;
        }

        return await StreamerModel.findById(id);
    }

    getStreamers = async (): Promise<Streamer[]> => {
        const streamers = await StreamerModel.find({});

        return streamers.map((streamer) => {
            return {
                id: streamer.id,
                name: streamer.name,
                description: streamer.description,
                platform: streamer.platform,
                imageUri: streamer.imageUri,
                voteCount: streamer.voteCount
            } as Streamer;
        });
    }

    createStreamer = async (streamer: Streamer): Promise<Streamer> => {
        if (await StreamerModel.exists({ name: streamer.name })) {
            throw new StreamerAlreadyExistError();
        }

        await StreamerModel.create(streamer);
        return streamer;
    }

    voteStreamer = async (id: string, isVoteUp: boolean): Promise<void> => {
        if (MongooseService.checkIfIdCorrect(id) === false) {
            throw new StreamerNotFound();
        }

        const streamer = await StreamerModel.findById(id);
        if (!streamer) {
            throw new StreamerNotFound();
        }

        if (isVoteUp) {
            streamer.voteCount++;
        } else {
            streamer.voteCount--;
        }

        streamer.save();
    }
}