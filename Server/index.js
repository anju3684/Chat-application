import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import Route from "./routes/route.js"
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use('/',Route)

const server = app.listen(process.env.PORT, () => {
  console.log("server runing at", process.env.PORT);
});
mongoose
  .connect(process.env.MONGO_URL, { useNewURLParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
  });

