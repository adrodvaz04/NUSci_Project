import {config as dotenvConfig} from 'dotenv';
import mongoose from 'mongoose';

export default class Connection {
    static async open(db) {
        try {
            dotenvConfig();
            const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER} = process.env;
            DATABASE_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.xtdufxk.mongodb.net/?retryWrites=true&w=majority&appName=nusci-cluster`;
            mongoose.connect(DATABASE_URL, {
                maxPoolSize: 50,
                socketTimeoutMS: 2500000,
                dbName: db
            });
            return mongoose.connection;
        } catch (e) {
            console.log("connection.js database failure")
        }
    }
}