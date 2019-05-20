const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const Data = require("./model/data");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

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

// Post
router.post("/putData", (req, res) => {
    let data = new Data();
    data.id = req.body["product_data"].id;
    data.name = req.body["product_data"].name;
    data.url = req.body["product_data"].url;
    data.img = req.body["product_data"].img;
    data.author = req.body["product_data"].author;
    data.price = req.body["product_data"].price;
    data.overview = req.body["product_data"].overview;
    data.category = req.body["product_data"].category;
    data.language = req.body["product_data"].language;
    data.year = req.body["product_data"].year;
    data.capacity = req.body["product_data"].capacity;
    data.save(
        err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        }
    );
    console.log(`save ${data.name}`);
});

router.post("/sendOrder", ((req, res)=> {
    console.log(req.body);
}));

// Get
router.get("/getData", (req, res) => {
    Data.find(
        (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }
    );
});

// Delete
router.delete("/deleteData", (req, res) => {
    let name = req.body;
    Data.findOneAndDelete(name, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`SERVER LISTENING ON PORT ${API_PORT}`));