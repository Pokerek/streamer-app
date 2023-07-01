import StreamersService from "../services/streamers-service";
import { StreamerInput, Platform } from "../types";

const createStreamer = async (formData: any) => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const platform = formData.get("platform") as Platform;

    const body = { name, description, platform } as StreamerInput;

    try {
        await StreamersService.createStreamer(body);
        return null;
    } catch (error) {
        return error;
    }
}

const voteStreamer = async (formData: any) => {
    const id = formData.get("id") as string;
    const vote = formData.get("vote") as string;

    try {
        await StreamersService.voteStreamer(id, vote);

        return null;
    } catch (error) {
        return error;
    }
}


const streamersListAction = async ({ request }: any) => {
    const formData = await request.formData();

    switch (request.method) {
        case "POST":
            return createStreamer(formData);

        case "PUT":
            return voteStreamer(formData);

        default:
            return null;
    }
};


export default streamersListAction;