export interface Streamer {
    id: string;
    name: string;
    description: string;
    platform: string;
    imageUri: string;
    voteCount: number;
}

export type StreamerInput = Omit<Streamer, "id" | "voteCount" | "imageUri">;

export enum Platform {
    Twitch = "Twitch",
    Youtube = "Youtube",
    TikTok = "TikTok",
    Rumble = "Rumble"
}