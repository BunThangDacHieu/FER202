import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
