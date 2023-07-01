import StreamersService from "../services/streamers-service"

const streamersListPageLoader = async () => {
    return await StreamersService.getStreamers();
};

export default streamersListPageLoader;