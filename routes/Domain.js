const express = require("express");
const router = express.Router();

const { createDomain , getDomains , getDomain , deleteDomain } = require("../controllers/Domain");
const { auth , isAdmin , isStudent , isTeacher } = require("../middlewares/Auth");

router.post("/createDomain" , auth , isTeacher , createDomain);
router.get("/getDomains" , auth , getDomains);
router.get("/getDomain/:domainName" , auth , getDomain);
router.delete("/deleteDomain" , auth , isAdmin , deleteDomain);

module.exports = router;
