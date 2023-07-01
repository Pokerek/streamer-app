import { BACKEND_URL } from "../constants";
import { Streamer } from "../types";

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
}