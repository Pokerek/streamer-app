import StreamersService from "../services/streamers-service";

const StreamerDetailPageLoader = async ({ params }: any) => {
    const streamerId = params.id;

    return await StreamersService.getStreamer(streamerId);
}

export default StreamerDetailPageLoader;