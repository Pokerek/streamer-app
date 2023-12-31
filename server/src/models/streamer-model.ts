import mongoose from "mongoose";

import { Platform } from "../types";

const Schema = mongoose.Schema;

export const NAME_MAX_LENGTH = 32;
export const DESCRIPTION_MAX_LENGTH = 256;

export interface StreamerDocument extends mongoose.Document {
    id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    platform: Platform;
    imageUri: string;
    voteCount: number;
}

const StreamerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        maxLength: NAME_MAX_LENGTH,
        required: true
    },
    description: {
        type: String,
        maxLength: DESCRIPTION_MAX_LENGTH,
        required: true
    },
    platform: {
        type: String,
        enum: Object.values(Platform),
        required: true
    },
    imageUri: {
        type: String,
        default: "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
    },
    voteCount: {
        type: Number,
        default: 0
    }
});

export default mongoose.model("Streamer", StreamerSchema);