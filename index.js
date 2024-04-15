const express = require("express");
const app = express();
const cors = require('cors');
const fileupload = require("express-fileupload");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const database = require("./config/database");
const cloudinary = require("./config/cloudinary");
database.connect();
cloudinary.cloudinaryConnect();

const auth = require("./routes/Auth");
const domain = require("./routes/Domain");
const internship = require("./routes/Internship");
const user = require("./routes/User");

app.use("/api/v1/auth" , auth);
app.use("/api/v1/domain" , domain);
app.use("/api/v1/internship" , internship);
app.use("/api/v1/user" , user);

app.get("/" , (req,res) => {
    res.send(`<h1>Server started</h1>`);
})

app.listen(process.env.PORT , () => {
    console.log(`SERVER STARTED SUCCESSFULLY AT PORT ${process.env.PORT}`);
});
