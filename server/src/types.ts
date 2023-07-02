export enum Platform {
    Twitch = "Twitch",
    Youtube = "Youtube",
    TikTok = "TikTok",
    Rumble = "Rumble"
}

export interface Streamer {
    id: string;
    name: string;
    description: string;
    platform: Platform;
    imageUri: string;
    voteCount: number;
} 