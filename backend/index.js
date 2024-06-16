import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './server/config/db.js';
import router from './server/router/Router.js';

config();
connectDB();

const app = express();
const port = process.env.PORT || 9000;
app.use('/', router);




app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
