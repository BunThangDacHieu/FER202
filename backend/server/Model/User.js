import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        "userid": {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        "username": {
            type: String,
            required: true
        },
        "password": {
            type: String,
            required: true
        },
        "email": {
            type: String,
        }
    },
    {
        Timestamp: true
    }
);


export const User = mongoose.model('User', UserSchema)