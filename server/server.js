const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
import apiRouter from './routes/api';
import loginRouter from './routes/login';

const API_PORT = 3001;
const app = express();
app.use(cors());
//const router = express.Router();

// connect to MongoDB database
const dbRoute = "mongodb+srv://Harry:Harry12345@cluster0-ingaq.mongodb.net/test?retryWrites=true";
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);
let db = mongoose.connection;

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("connected to MongoDB"));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// append /api for our http requests
app.use("/api", apiRouter);
app.use("/", loginRouter);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`SERVER LISTENING ON PORT ${API_PORT}`));