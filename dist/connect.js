"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var isConnectedBefore = false;
const DB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@testdb-lutsy.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
exports.default = () => {
    const connect = () => {
        mongoose_1.default
            .connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true })
            .then(() => {
            return console.info(`Successfully connected to DB.`);
        })
            .catch((err) => {
            console.error(`Error connecting to database :`, err);
            return process.exit(1);
        });
    };
    connect();
    //mongoose.connection.on('disconnected',connect);
    mongoose_1.default.connection.on('disconnected', function () {
        console.log('Lost MongoDB connection...');
        if (!isConnectedBefore)
            connect();
    });
    mongoose_1.default.connection.on('connected', function () {
        isConnectedBefore = true;
        console.log('Connection established to MongoDB');
    });
    mongoose_1.default.connection.on('reconnected', function () {
        console.log('Reconnected to MongoDB');
    });
    // Close the Mongoose connection, when receiving SIGINT
    process.on('SIGINT', function () {
        mongoose_1.default.connection.close(function () {
            console.log('Force to close the MongoDB conection');
            process.exit(0);
        });
    });
};
