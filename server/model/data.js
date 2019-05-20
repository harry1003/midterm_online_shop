// data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
    {
        id: Number,
        name: String,
        url: String,
        img: Buffer,
        author: String,
        price: Number,
        overview: String,

        category: String,
        language: String,
        year: Number,
        capacity: Number
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);