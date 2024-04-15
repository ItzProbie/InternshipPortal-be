const cloudinary = require("cloudinary").v2;

exports.uploadFileToCloudinary = async(file , folder ) => {
    try{
     const options = {folder};
 
 
 
     options.resource_type = "auto";
     const returningValue =  await cloudinary.uploader.upload(file.tempFilePath , options);
    //  console.log("insode uploading func" , returningValue);
     return returningValue;
 
 }catch(err){
     console.log(err);
    }
 } 

