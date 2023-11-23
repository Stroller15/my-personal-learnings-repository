import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from "mongoose";


const app = express();


app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(4242, () => {
    console.log("server is running");
});


const MONGO_URL =
  "mongodb+srv://shubhamverma6351:shubham@cluster0.vmddgzy.mongodb.net/?retryWrites=true&w=majority";
  

  mongoose.Promise = Promise;
  mongoose.connect(MONGO_URL);
  mongoose.connection.on('error', (error: Error) => console.log(error));
