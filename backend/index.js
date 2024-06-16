import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './server/config/db.js';

config();
connectDB();

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
