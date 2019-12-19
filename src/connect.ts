import mongoose from 'mongoose';

type DBInput = {
    db : string;
}

var isConnectedBefore: Boolean = false;
const DB_URI: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@testdb-lutsy.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

export default () => {
    
    const connect = () => {
        mongoose
            .connect(DB_URI,{ useNewUrlParser: true, useCreateIndex: true })
            .then(() => {
                return console.info(`Successfully connected to DB.`);
            })
            .catch((err) => {
                console.error(`Error connecting to database :`,err);

                return process.exit(1);
            })
    };

    connect();
    //mongoose.connection.on('disconnected',connect);
    mongoose.connection.on('disconnected', function(){
        console.log('Lost MongoDB connection...');
        if (!isConnectedBefore)
            connect();
    });

    mongoose.connection.on('connected', function() {
        isConnectedBefore = true;
        console.log('Connection established to MongoDB');
    });

    mongoose.connection.on('reconnected', function() {
        console.log('Reconnected to MongoDB');
    });

    // Close the Mongoose connection, when receiving SIGINT
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Force to close the MongoDB conection');
            process.exit(0);
        });
    });
}