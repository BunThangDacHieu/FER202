import Post from './model/Post.js'; // Correct way to import default export
import User from './model/User.js'; // Similarly, adjust for User if needed

// CRUD
export const SeeAllPost = async (req, res) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};


export const CreatePost = async (req, res) => {
    try {
        const { title, description, image, username } = req.body;

        const newPost = new Post({
            title,
            description,
            image,
            username,
        });

        const savedPost = await newPost.save();
        console.log('Post created successfully', savedPost);
        return res.status(201).json({ message: 'Post created successfully', post: savedPost });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const SeeAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        const response = {
            count: users.length,
            data: users
        };
        return res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};
