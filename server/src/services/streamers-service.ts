import StreamerNotFound from "../errors/streamer-not-found-error";
import StreamerModel, { StreamerDocument } from "../models/streamer-model";
import MongooseService from "./mongoose-service";

export type Streamer = Pick<StreamerDocument, "id" | "name" | "description" | "platform" | "imageUri" | "voteCount">;

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
            };
        });
    }

    createStreamer = async (streamer: Streamer): Promise<Streamer> => {
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