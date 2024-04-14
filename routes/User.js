const express = require("express");
const router = express.Router();

const {getUser} = require("../controllers/User");
const {auth , isTeacher} = require("../middlewares/Auth");

router.get("/getUser" , auth , isTeacher , getUser);


module.exports = router;