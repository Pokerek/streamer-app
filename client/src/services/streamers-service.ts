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
            throw new Error("Failed to fetch streamers");
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
            throw new Error("Failed to fetch streamer");
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
            throw new Error("Failed to create streamer");
        }

        const createdStreamer = await response.json() as Streamer;
        return createdStreamer;
    }
}