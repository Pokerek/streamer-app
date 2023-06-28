import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface StreamerDocument extends mongoose.Document {
    id: mongoose.Types.ObjectId;
    name: string;
    description: string;
    platform: string;
    imageUri: string;
    voteCount: number;
}

const StreamerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    platform: {
        type: String,
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