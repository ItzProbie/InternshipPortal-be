const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.auth = async(req,res,next) => {

    try{

        var Token = req.headers['authorization'];

        if(!Token){
            return res.status(401).json({
                success : false,
                message : "Token not found"
            });
        }
        const token = (Token.split(' '))[1];
        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }catch(err){
            return res.status(401).json({
                success : false,
                message : "Token invlaid"
            });
        }
        next();

    }catch(err){
        console.log(err);
        return res.status(401).json({
            success : false,
            message : "something went wrong while token validation",
            error : err.message
        }); 
    }

}

exports.isStudent = async(req,res,next) => {

    try{

        if(req.user.role !== 'Student'){
            return res.status(401).json({
                success : false,
                message : "Unauthorized"
            });
        }
        next();

    }catch(err){

        console.log(err);
        return res.status(500).json({
            success : false,
            message : "User role verification failed , plz try again later",
            error : err.message
        });

    }

}

exports.isTeacher = async(req,res,next) => {

    try{

        if(req.user.role !== 'Teacher'){
            return res.status(401).json({
                success : false,
                message : "Unauthorized"
            });
        }
        next();

    }catch(err){

        console.log(err);
        return res.status(500).json({
            success : false,
            message : "User role verification failed , plz try again later",
            error : err.message
        });

    }

}

exports.isAdmin = async(req,res,next) => {

    try{

        if(req.user.role !== 'Admin'){
            return res.status(401).json({
                success : false,
                message : "Unauthorized"
            });
        }
        next();

    }catch(err){

        console.log(err);
        return res.status(500).json({
            success : false,
            message : "User role verification failed , plz try again later",
            error : err.message
        });

    }

}

