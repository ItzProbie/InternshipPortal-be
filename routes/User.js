const express = require("express");
const router = express.Router();

const { getUser , deleteUser } = require("../controllers/User");
const { auth , isTeacher , isAdmin } = require("../middlewares/Auth");

router.get("/getUser" , auth , isTeacher , getUser);
router.delete("/deleteUser" , auth , isAdmin , deleteUser);


module.exports = router;