const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
        
    },
    subject: {
        type: String,
        required: true,
    },
    contact: {
        required: true,
        type: Number,
    },
    message:{
required:true,
type:String
    },
  
});


const User = mongoose.model("User", userSchema);

module.exports = User;
