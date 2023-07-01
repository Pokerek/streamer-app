import StreamersService from "../services/streamers-service"

const StreamersListPageLoader = async () => {
    return await StreamersService.getStreamers();
};

export default StreamersListPageLoader;