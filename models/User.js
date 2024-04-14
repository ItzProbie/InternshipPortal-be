const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    role : {
        type:String,
        enum:[
             "Student" , "Teacher",  "Admin" 
        ],
        require : true
    },
    password : {
        type : String,
        require  : true
    },
    id : {
        type : String,
        require : true
    },
    mentor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    applications : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Internship"
        }
    ],
    image : {
        type : String,
        require : true,
    },
    dept : {
        type : String , 
        enum : ["ETC" , "IT" , "CS"],
        require : true
    }

})

module.exports = mongoose.model("User" , userSchema);