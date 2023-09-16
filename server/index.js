/************************************************************
 S E R V E R
************************************************************/

import express from 'express';
import cors from 'cors';
import dotenv from '../configs/dotevn';
import router from '../routes';
// import helpers from '../helper';
// import socket from '../socket';


const appName   = process.env.APP_NAME
const appPort   = process.env.APP_PORT
const appUrl    = process.env.APP_URL

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit:'500mb'}));
app.use(cors({
    origin: true,
    credentials: true,
}));

// app.use("/message/v1",socket);

app.use("/api/v1", router);
// app.use(helpers.checkBrowser);

app.route("/").get((req, res) => res.status(200).send("Welcome To Minimal API"));
app.listen(appPort, () => {
    console.log(`${appName} is running on ${appUrl+':'+appPort}`)
})