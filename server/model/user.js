const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type:String, required:[true, "userName is required"]},
    password: {type:String, required:[true, "password is required"]},
    history: Array,
    img: Buffer,
    firstName: String,
    lastName: String,
    phone: String,
    gender: String
})

const user = mongoose.model('user', userSchema);

export default user;