import StreamersService from "../services/streamers-service";

const streamerDetailPageLoader = async ({ params }: any) => {
    const streamerId = params.id;

    return await StreamersService.getStreamer(streamerId);
}

export default streamerDetailPageLoader;