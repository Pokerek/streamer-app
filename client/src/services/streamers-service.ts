import { BACKEND_URL } from "../constants";
import { Streamer, StreamerInput } from "../types";

export default class StreamersService {
    public static async getStreamers(): Promise<Streamer[]> {
        const response = await fetch(`${BACKEND_URL}/streamers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to get streamers");
        }

        const streamers = await response.json() as Streamer[];
        return streamers;
    }

    public static async getStreamer(streamerId: string): Promise<Streamer> {
        const response = await fetch(`${BACKEND_URL}/streamer/${streamerId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to get streamer");
        }

        const streamer = await response.json() as Streamer;
        return streamer;
    }

    public static async createStreamer(streamer: StreamerInput): Promise<Streamer> {
        const response = await fetch(`${BACKEND_URL}/streamers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(streamer),
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }

        const createdStreamer = await response.json() as Streamer;
        return createdStreamer;
    }

    public static async voteStreamer(streamerId: string, vote: string): Promise<void> {
        const response = await fetch(`${BACKEND_URL}/streamers/${streamerId}/vote`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isVoteUp: vote === "up" }),
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }
    }
}