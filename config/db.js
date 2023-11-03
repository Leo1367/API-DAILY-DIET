import mongoose from 'mongoose';
import { config } from 'dotenv';

config()

const { PASSWORD_DB, USER_DB } = process.env;
const dbURL = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@apicluster.wsvxghx.mongodb.net/`;

const conectDB = async () => {
    try {
        mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

export default conectDB;