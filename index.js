const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());

const database = require("./config/database");
database.connect();

const auth = require("./routes/Auth");
const domain = require("./routes/Domain");
const internship = require("./routes/Internship");

app.use("/api/v1/auth" , auth);
app.use("/api/v1/domain" , domain);
app.use("/api/v1/internship" , internship);

app.get("/" , (req,res) => {
    res.send(`<h1>Server started</h1>`);
})

app.listen(process.env.PORT , () => {
    console.log(`SERVER STARTED SUCCESSFULLY AT PORT ${process.env.PORT}`);
});
