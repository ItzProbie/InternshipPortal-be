const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {console.log("DB CONNECTION SUCCESSFULL")})
    .catch((err) => {
        console.log("DB CONNECTION FAILED");
        console.log(err.message);
        process.exit(1);
    })
}