const mongoose = require('mongoose');


const blogSchama = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is mandatory"]
    },
  description:{
        type:String,
        required:[true,"description is required"]

    },
    image:{
        type:String,
        required:[true, "image link required"]
    }
});

module.exports = mongoose.model("Blog",blogSchama)