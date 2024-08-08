const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:4,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;