import mongoose from "mongoose";

export default class MongooseService {
    static connect = async (): Promise<void> => {
        const { DB_USER, DB_PASSWORD, DB_URL } = process.env;
        try {
            await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}`);
        } catch (error) {
            throw Error('Error connecting to database');
        }

        console.log("Connected to MongoDB");
    }

    static checkIfIdCorrect = (id: string): boolean => {
        return mongoose.Types.ObjectId.isValid(id);
    }
}