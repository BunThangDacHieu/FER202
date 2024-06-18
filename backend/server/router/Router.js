import express from "express";
const router = express.Router();
import { SeeAllPost } from "../controller/Controller.js";
import { SeeAllUser } from "../controller/Controller.js";
import { CreatePost } from "../controller/Controller.js";

router.get('/post', SeeAllPost);
router.post('/post', CreatePost);

router.get('/user', SeeAllUser);



export default router;
