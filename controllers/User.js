const User = require("../models/User");
const Internship = require("../models/Internship");

//auth isTeacher
exports.getUser = async(req,res) => {

    try{

        const userMail = req.body.mail;

        if(!userMail){
            return res.status(400).json({
                success : false,
                message : "Missing mail"
            });
        }

        const user = await User.findOne({email : userMail}).select("firstName lastName email role id image dept" );

        if(!user){
            return res.status(404).json({
                success : false,
                message : "Invalid user"
            });
        }

        return res.status(200).json({
            success : true,
            user
        });

    }catch(err){

        return res.status(500).json({
            success : false,
            error : err.message,
            message : "Something went wrong while getting student data , plz try again later"
        });

    }

}