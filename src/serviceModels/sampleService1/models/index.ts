import mongoose, { Schema,Document } from 'mongoose';

export interface Isample1 extends Document {
    email : String;
    firstName : String;
    lastName : String;
}

const Sample1Schema : Schema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    }
});

export default mongoose.model<Isample1>('Sample1',Sample1Schema);