const mongoose = require("mongoose");

const internshipSchema =  new mongoose.Schema({
    
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    domain : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Domain"
        }
    ],
    description : {
        type : String
    },
    applicants: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        state: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            required : true,
            default : 'pending'
        }
    }],
    State : {
        type : Boolean,
        default : true
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
        required : true
    }

})

module.exports = mongoose.model("Internship" , internshipSchema);