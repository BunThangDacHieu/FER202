import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send(`MERN stack`)
});
export default router