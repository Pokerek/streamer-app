import mongoose from "mongoose";

export default class MongooseService {
    static connect = async (): Promise<void> => {
        const { DB_USER, DB_PASSWORD } = process.env;
        try {
            await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/?authMechanism=DEFAULT`);
        } catch (error) {
            throw Error('Error connecting to database');
        }

        console.log("Connected to MongoDB");
    }
}