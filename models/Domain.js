const mongoose = require("mongoose");

const domainSchema =  new mongoose.Schema({
    
    name : {
        type : String ,
        required : true
    },
    teachers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    internships : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Internship"
        }
    ]

})

module.exports = mongoose.model("Domain" , domainSchema);